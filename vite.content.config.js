import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    emptyOutDir: false,
    sourcemap:true,
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content/main.js'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.type === 'asset' && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name)) {
            return 'assets/img/[name].[ext]';
          }   
          if (assetInfo.type === 'asset' && /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name].[ext]';
          }
          if (assetInfo.type === 'asset' && /\.(css)$/i.test(assetInfo.name)) {
            return 'src/[name]/[name].[ext]';
          }  
          return 'assets/[ext]/[name].[ext]';
        },
        entryFileNames: (chunkInfo) => { 
          return 'src/[name]/[name].js'
        },
      }
    },
  },

})
