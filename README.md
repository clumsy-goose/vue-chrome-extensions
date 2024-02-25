## 目录结构如下：每个文件的具体作用可以参考commit


```
vue-chrome-extensions
├─ .env.development
├─ .env.production
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc.json
├─ jsconfig.json
├─ manifest.json
├─ package-lock.json
├─ package.json
├─ plugin
│  └─ rollup-plugin-notifier.js
├─ public
│  └─ favicon.ico
├─ src
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ icon
│  │  │  ├─ icon_128.png
│  │  │  ├─ icon_16.png
│  │  │  └─ icon_48.png
│  │  ├─ logo.svg
│  │  └─ main.css
│  ├─ auto-imports.d.ts
│  ├─ background
│  │  ├─ API
│  │  │  ├─ baidu.js
│  │  │  └─ request.js
│  │  └─ main.js
│  ├─ components.d.ts
│  ├─ config
│  │  └─ index.js
│  ├─ content
│  │  ├─ ContentApp.vue
│  │  └─ main.js
│  ├─ options
│  │  ├─ components
│  │  ├─ index.html
│  │  ├─ main.js
│  │  ├─ OptionApp.vue
│  │  └─ views
│  ├─ sidePanel
│  │  ├─ components
│  │  │  ├─ button
│  │  │  │  ├─ HistoryBtn.vue
│  │  │  │  ├─ OptionBtn.vue
│  │  │  │  ├─ SendMessageBtn.vue
│  │  │  │  └─ SettingsBtn.vue
│  │  │  ├─ card
│  │  │  │  ├─ ApplyMessageCard.vue
│  │  │  │  └─ UserMessageCard.vue
│  │  │  ├─ icon
│  │  │  │  ├─ CloseIcon.vue
│  │  │  │  ├─ DownIcon.vue
│  │  │  │  ├─ HistoryIcon.vue
│  │  │  │  ├─ SendIcon.vue
│  │  │  │  └─ SettingsIcon.vue
│  │  │  └─ input
│  │  │     └─ Input.vue
│  │  ├─ index.html
│  │  ├─ main.js
│  │  ├─ SidePanelApp.vue
│  │  ├─ store
│  │  │  └─ messages.js
│  │  └─ views
│  │     ├─ ChatHeader.vue
│  │     ├─ ChatHistory.vue
│  │     ├─ ChatInput.vue
│  │     └─ ChatList.vue
│  └─ utils
│     ├─ hot_reload.js
│     ├─ md5.js
│     └─ selector.js
├─ vite.background.config.js
├─ vite.config.js
└─ vite.content.config.js

```

## 使用方法

### 进入主目录，安装依赖

```shell
npm install
```

### 打包dist文件夹，并进行热更新(详见package.json)

```shell
npm run watch
```

### 打开chrome浏览器拓展，加载dist文件夹

1. 谷歌浏览器导航栏输入chrome://extensions/
2. 点击左上角加载已解压的拓展程序加载改文件夹
3. 点击右上角拓展处的插件图标即可打开插件

![image-20240226024657642](C:\Users\binger\AppData\Roaming\Typora\typora-user-images\image-20240226024657642.png)

