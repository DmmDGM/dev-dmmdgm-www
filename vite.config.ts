// Imports
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// Exports
export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	]
});
