let params = {
    bounds: {
	ymin: -1,
	ymax: 1,
	xmin: -2.5,
	xmax: 1,
    },
    canvas: null,
};

import("../crate/pkg").then(module => {
    window.module = module; // make accessible from devtools
    
    module.run(); // set_panic_hook
    params.canvas = document.getElementById("mandelbrot").getContext("2d");
    redraw();
});

function redraw() {
    params.canvas.canvas.width = 840;
    params.canvas.canvas.height = 480;
    
    window.module.render(params.canvas, params.canvas.canvas.width, params.canvas.canvas.height,
			 params.bounds.xmin, params.bounds.xmax,
			 params.bounds.ymin, params.bounds.ymax);
}


