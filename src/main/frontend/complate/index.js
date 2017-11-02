import "./env"; // NB: must be imported (i.e. initialized) before macros
import views from "./manifest";
import Renderer from "complate-stream";

let renderer = new Renderer("<!DOCTYPE html>");

views.forEach(view => {
	renderer.registerView(view);
});

// omits doctype if `params._fragment` is `true`
export default (stream, view, params, callback) => {
	let fragment = params && params._fragment === true;
	return renderer.renderView(view, params, stream, { fragment }, callback);
};
