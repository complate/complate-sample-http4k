"use strict";

let templateDir = "./src/main/frontend/complate";

let js = {
	manifest: false,
	bundles: [{
		entryPoint: templateDir + "/index.js",
		target: "./build/classes/main/templates/complate/views.js",
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
