use wasm_bindgen::prelude::*;
use wasm_bindgen::Clamped;
use web_sys::console;
use web_sys::{CanvasRenderingContext2d, ImageData};

use num_complex::Complex;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// Called by our JS entry point to run the example.
#[wasm_bindgen]
pub fn run() -> Result<(), JsValue> {
    set_panic_hook();
/*
    let window = web_sys::window().expect("should have a Window");
    let document = window.document().expect("should have a Document");

    let p: web_sys::Node = document.create_element("p")?.into();
    p.set_text_content(Some("Hello from Rust, WebAssembly, and Webpack!"));

    let body = document.body().expect("should have a body");
    let body: &web_sys::Node = body.as_ref();
    body.append_child(&p)?;
*/
    Ok(())
}

const MAX_ITER: u32 = 1000;
#[wasm_bindgen]
pub fn render(ctx: &CanvasRenderingContext2d,
              width: u32, height: u32,
              x_min: f32, x_max: f32,
              y_min: f32, y_max: f32) {
    console::log_1(&format!("a: {}, {}, {}, {}, {}, {}", width, height, x_min, x_max, y_min, y_max).into());
    let mut data = Vec::with_capacity((4 * height*width) as usize); // RGBA for h*w pixels
    for i in 0..height {
        for j in 0..width { // for all (i, j) pixels
            // setup
            let re = fit_to_window(i, (0.0, width as f32), (x_min, x_max)) as f64;
            let im = fit_to_window(j, (0.0, height as f32), (y_min, y_max)) as f64; // fit re, im pixels to window

            // iteration
            let mut z = Complex::new(0.0, 0.0);
            let c = Complex::new(re, im); // get complex num c from parts
            let mut iter = 0;
            while z.norm() < 2.0 && iter < MAX_ITER {
                z = z.powf(2.0) + c; // z_(n+1) = z_n^2+c
                iter = iter + 1
            }
            
            //console::log_1(&format!("iter: {}", iter).into());
            // colors
            data.push((iter / 4) as u8); // r
            data.push((iter / 2) as u8); // g
            data.push(iter as u8); // b
            data.push(255); // a - no transparency
        }
    }

    let data = ImageData::new_with_u8_clamped_array_and_sh(Clamped(&mut data), width, height).unwrap();
    ctx.put_image_data(&data, 0.0, 0.0);
}

fn fit_to_window(n: u32, curr: (f32, f32), next: (f32, f32)) -> f32 {
//    console::log_1(&format!("{}, ({}, {}), ({}, {})", n, curr.0, curr.1, next.0, next.1).into());
    (n as f32)
        * (next.1 - next.0) / (curr.1 - curr.0) // current
        + next.0
}

fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function to get better error messages if we ever panic.
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}