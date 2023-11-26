import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./index.js"],
	splitting: false,
	sourcemap: true,
	clean: true,
	format: ["cjs", "esm"],
});
