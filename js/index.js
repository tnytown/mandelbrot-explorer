window.state = {
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
    window.state.canvas = document.getElementById("mandelbrot").getContext("2d");
    redraw();
});

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


