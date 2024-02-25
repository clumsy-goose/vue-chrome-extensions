import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import copy from 'rollup-plugin-copy'
import { resolve } from 'path'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import buildNotifier from './plugin/rollup-plugin-notifier'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    buildNotifier(),
    copy({
      targets: [
        { src: 'manifest.json', dest: 'dist' }, // 复制 manifest.json 到 dist 目录
        { src: "src/assets/icon", dest: 'dist/assets' } // 复制 src/assets/icon 到 dist/assets 目录
      ]
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports:['vue','pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/'],  
      extensions: ['vue'],      
      deep: true,
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
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
        options: resolve(__dirname,'src/options/index.html'),
        sidePanel: resolve(__dirname,'src/sidePanel/index.html')
      },
      output: {
        chunkFileNames: 'js/[name].js', // 公共chunk
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
