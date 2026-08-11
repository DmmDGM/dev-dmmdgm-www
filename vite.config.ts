// Imports
import { cloudflare } from "@cloudflare/vite-plugin";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// Exports
export default defineConfig({
	plugins: [
		preact(),
		cloudflare()
	]
});
