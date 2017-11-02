"use strict";

let templateDir = "./src/main/frontend/views";

let js = {
	manifest: false,
	bundles: [{
		entryPoint: templateDir + "/index.js",
		target: "./build/classes/main/templates/views/views.js",
		moduleName: "render",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" },
			exclude: ["classnames"]
		}
	}]
};

module.exports = {
	watchDirs: [templateDir],
	js
};
