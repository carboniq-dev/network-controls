import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	base: '/',
	build: {
		outDir: './public',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				entryFileNames: 'index.js',
			},
			external: ['https'],
		},
	},
	plugins: [
		tailwindcss(),
		preact(),
	],
});
