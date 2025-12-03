import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react()
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    loader: 'tsx',
    include: /src\\/.+\\.tsx?$/,
    exclude: null,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx', '.ts': 'tsx' },
    },
  },
})
