window.state = {
    canvas: null,
};

import("../crate/pkg").then(module => {
    window.module = module; // make accessible from devtools
    
    module.run(); // set_panic_hook
    let canvas = document.getElementById("mandelbrot");
    window.state.canvas = canvas.getContext("2d");
    canvas.addEventListener("click", canvasClick);
    
    redraw();
});

function canvasClick(e) {
    let p = readParams();
    let x = scaleToWindow(e.offsetX, 0, state.canvas.canvas.width, p.bounds.xmin, p.bounds.xmax);
    let y = scaleToWindow(e.offsetY, 0, state.canvas.canvas.height, p.bounds.ymin, p.bounds.ymax);
    console.log(`${x} + ${y}i`);

    document.getElementById("center_x").value = x;
    document.getElementById("center_y").value = y;
}

function zoomWindow() {
    let zoom = numberById("zoom");
    let x = numberById("center_x");
    let y = numberById("center_y");
    
    let offsets = {
	x_min: x - 2.5 / zoom,
	x_max: x + 1 / zoom,
	y_min: y - 1 / zoom,
	y_max: y + 1 / zoom,
    }

    for(e of Object.entries(offsets)) {
	setNumberById(e[0], e[1]);
    }
}
window.zoomWindow = zoomWindow;

function scaleToWindow(n, curr_l, curr_u, next_l, next_u) {
    return n * (next_u - next_l) / (curr_u - curr_l) + next_l;
}

function readParams() {
    return {
	escape: numberById("escape"),
	greyscale: document.querySelector("input[name=color]:checked").id == "greyscale",
	
	bounds: {
	    ymin: numberById("y_min"),
	    ymax: numberById("y_max"),
	    xmin: numberById("x_min"),
	    xmax: numberById("x_max"),
	},
    };
}
window.readParams = readParams;

function numberById(id) {
    return document.getElementById(id).valueAsNumber;
}

function setNumberById(id, n) {
    document.getElementById(id).value = n;
}

function redraw() {
    let params = readParams();
    window.module.render(state.canvas,
			 params.escape,
			 params.greyscale,
			 state.canvas.canvas.width, state.canvas.canvas.height,
			 params.bounds.xmin, params.bounds.xmax,
			 params.bounds.ymin, params.bounds.ymax);
}
window.redraw = redraw;


