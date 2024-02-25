import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import buildNotifier from './plugin/rollup-plugin-notifier'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // buildNotifier(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    emptyOutDir: false,//很重要，如果不设置的话生成的打包文件会被清理
    sourcemap:true,
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background/main.js'),
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
        entryFileNames: 'src/[name]/[name].js',
      }
    },
  },

})
