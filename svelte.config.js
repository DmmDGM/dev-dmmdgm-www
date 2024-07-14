// Imports
import adapter from "@sveltejs/adapter-node";
import sveltePreprocess from "svelte-preprocess";

// Creates config
/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess()
};

// Exports
export default config;
