# VSCode

一个跨平台源代码编辑器。

## 我的配置

### extensions.json

```json
{
  "recommendations": [
    "russell.any-rule",
    "formulahendry.auto-rename-tag",
    "bungcip.better-toml",
    "ms-ceintl.vscode-language-pack-zh-hans",
    "denoland.vscode-deno",
    "mikestead.dotenv",
    "editorconfig.editorconfig",
    "tobermory.es6-string-html",
    "dbaeumer.vscode-eslint",
    "codezombiech.gitignore",
    "eamodio.gitlens",
    "ritwickdey.liveserver",
    "thisismanta.stylus-supremacy",
    "bierner.markdown-preview-github-styles",
    "pkief.material-icon-theme",
    "christian-kohler.npm-intellisense",
    "techer.open-in-browser",
    "christian-kohler.path-intellisense",
    "esbenp.prettier-vscode",
    "bodil.prettier-toml",
    "rust-lang.rust-analyzer",
    "wenfangdu.snippet-generator",
    "richie5um2.vscode-sort-json",
    "sysoev.language-stylus",
    "tauri-apps.tauri-vscode",
    "octref.vetur",
    "antfu.theme-vitesse",
    "antfu.iconify",
    "bradlc.vscode-tailwindcss",
    "vue.vscode-typescript-vue-plugin",
    "antfu.unocss",
    "vue.volar",
    "voorjaar.windicss-intellisense"
  ]
}
```

### global.code-snippets

```json
{
  "CSS base": {
    "body": [
      "*,",
      "::before,",
      "::after {",
      "\tbox-sizing: border-box;",
      "}",
      "",
      "body {",
      "\tfont-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,",
      "\t\t'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,",
      "\t\t'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
      "\t-webkit-font-smoothing: antialiased;",
      "\t-moz-osx-font-smoothing: grayscale;",
      "}",
      "",
      "code {",
      "\tfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,",
      "\t\t'Liberation Mono', 'Courier New', monospace;",
      "}",
      ""
    ],
    "description": "CSS base",
    "prefix": "base",
    "scope": "css,scss,less,stylus"
  },
  "Const Vuex module": {
    "body": [
      "const state = {",
      "\t$1",
      "}",
      "",
      "const getters = {",
      "\t$2",
      "}",
      "",
      "const mutations = {",
      "\t$3",
      "}",
      "",
      "const actions = {",
      "\t$4",
      "}",
      "",
      "export default {",
      "\tnamespaced: true,",
      "\tstate,",
      "\tgetters,",
      "\tmutations,",
      "\tactions",
      "}",
      ""
    ],
    "description": "Const Vuex module",
    "prefix": "const-vuex-module",
    "scope": "javascript"
  },
  "Const storage": {
    "body": [
      "const ASSESS_TOKEN = 'assess_token'",
      "",
      "export function getAssessToken() {",
      "\treturn localStorage.getItem(ASSESS_TOKEN)",
      "}",
      "",
      "export function setAssessToken(assess_token) {",
      "\tlocalStorage.setItem(ASSESS_TOKEN, assess_token)",
      "}",
      "",
      "export function removeAssessToken() {",
      "\tlocalStorage.removeItem(ASSESS_TOKEN)",
      "}",
      ""
    ],
    "description": "Const storage",
    "prefix": "const-storage",
    "scope": "javascript"
  },
  "Export Default Vuex module": {
    "body": [
      "export default {",
      "\tnamespaced: true,",
      "\tstate: {",
      "\t\t$1",
      "\t},",
      "\tgetters: {",
      "\t\t$2",
      "\t},",
      "\tmutations: {",
      "\t\t$3",
      "\t},",
      "\tactions: {",
      "\t\t$0",
      "\t}",
      "}",
      ""
    ],
    "description": "Export Default Vuex module",
    "prefix": "export-default-vuex-module",
    "scope": "javascript"
  },
  "Import Axios request": {
    "body": [
      "import axios from 'axios'",
      "",
      "const request = axios.create({",
      "\tbaseURL: $0",
      "})",
      "",
      "// 添加请求拦截器",
      "request.interceptors.request.use(",
      "\tconfig => {",
      "\t\t// 在发送请求之前做些什么",
      "\t\treturn config",
      "\t},",
      "\terror => {",
      "\t\t// 对请求错误做些什么",
      "\t\treturn Promise.reject(error)",
      "\t}",
      ")",
      "",
      "// 添加响应拦截器",
      "request.interceptors.response.use(",
      "\tresponse => {",
      "\t\t// 2xx 范围内的状态码都会触发该函数。",
      "\t\t// 对响应数据做点什么",
      "\t\treturn response",
      "\t},",
      "\terror => {",
      "\t\t// 超出 2xx 范围的状态码都会触发该函数。",
      "\t\t// 对响应错误做点什么",
      "\t\treturn Promise.reject(error)",
      "\t}",
      ")",
      "",
      "export default request",
      ""
    ],
    "description": "Import Axios request",
    "prefix": "import-axios-request",
    "scope": "javascript"
  },
  "Script": {
    "body": ["<script>", "export default {", "\t$1", "}", "</script>", ""],
    "description": "Script",
    "prefix": "<script>",
    "scope": "vue"
  },
  "Script setup": {
    "body": ["<script setup>", "$1", "</script>", ""],
    "description": "Script setup",
    "prefix": "<script> setup",
    "scope": "vue"
  },
  "Script setup TS ": {
    "body": ["<script setup lang=\"ts\">", "$1", "</script>", ""],
    "description": "Script setup TS",
    "prefix": "<script> setup-ts",
    "scope": "vue"
  },
  "Style": {
    "body": ["<style>", "$1", "</style>", ""],
    "description": "Style",
    "prefix": "<style>",
    "scope": "vue"
  },
  "Style Less": {
    "body": ["<style lang=\"less\">", "$1", "</style>", ""],
    "description": "Style Less",
    "prefix": "<style> less",
    "scope": "vue"
  },
  "Style Less scoped": {
    "body": ["<style lang=\"less\" scoped>", "$1", "</style>", ""],
    "description": "Style Less scoped",
    "prefix": "<style> less-scoped",
    "scope": "vue"
  },
  "Style SCSS": {
    "body": ["<style lang=\"scss\">", "$1", "</style>", ""],
    "description": "Style SCSS",
    "prefix": "<style> scss",
    "scope": "vue"
  },
  "Style SCSS scoped": {
    "body": ["<style lang=\"scss\" scoped>", "$1", "</style>", ""],
    "description": "Style SCSS scoped",
    "prefix": "<style> scss-scoped",
    "scope": "vue"
  },
  "Style scoped": {
    "body": ["<style scoped>", "$1", "</style>", ""],
    "description": "Style scoped",
    "prefix": "<style> scoped",
    "scope": "vue"
  },
  "Template": {
    "body": ["<template>", "\t$1", "</template>", ""],
    "description": "Template",
    "prefix": "<template>",
    "scope": "vue"
  },
  "Vue": {
    "body": [
      "<template>",
      "\t$1",
      "</template>",
      "",
      "<script>",
      "export default {",
      "\t$3",
      "}",
      "</script>",
      "",
      "<style scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue",
    "prefix": "<vue>",
    "scope": "vue"
  },
  "Vue Less": {
    "body": [
      "<template>",
      "\t$1",
      "</template>",
      "",
      "<script>",
      "export default {",
      "\t$3",
      "}",
      "</script>",
      "",
      "<style lang=\"less\" scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue Less",
    "prefix": "<vue> less",
    "scope": "vue"
  },
  "Vue Router afterEach": {
    "body": ["router.afterEach((to, from) => {", "\t$1", "})", ""],
    "description": "Vue Router afterEach",
    "prefix": "vue-router-afterEach",
    "scope": "javascript"
  },
  "Vue Router beforeEach": {
    "body": ["router.beforeEach((to, from, next) => {", "\t$1", "})", ""],
    "description": "Vue Router beforeEach",
    "prefix": "vue-router-beforeEach",
    "scope": "javascript"
  },
  "Vue Router route": {
    "body": ["{", "\tpath: '$2',", "\tname: '$3',", "\tcomponent: $1", "}"],
    "description": "Vue Router route",
    "prefix": "vue-router-route",
    "scope": "javascript"
  },
  "Vue Router route lazy-loaded": {
    "body": [
      "{",
      "\tpath: '$2',",
      "\tname: '$3',",
      "\tcomponent: () => import('../views/$1')",
      "}"
    ],
    "description": "Vue Router route lazy-loaded",
    "prefix": "vue-router-route-lazy-loaded",
    "scope": "javascript"
  },
  "Vue SCSS": {
    "body": [
      "<template>",
      "\t$1",
      "</template>",
      "",
      "<script>",
      "export default {",
      "\t$3",
      "}",
      "</script>",
      "",
      "<style lang=\"scss\" scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue SCSS",
    "prefix": "<vue> scss",
    "scope": "vue"
  },
  "Vue setup": {
    "body": [
      "<script setup>",
      "$1",
      "</script>",
      "",
      "<template>",
      "\t$2",
      "</template>",
      "",
      "<style scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue setup",
    "prefix": "<vue> setup",
    "scope": "vue"
  },
  "Vue setup Less": {
    "body": [
      "<script setup>",
      "$1",
      "</script>",
      "",
      "<template>",
      "\t$2",
      "</template>",
      "",
      "<style lang=\"less\" scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue setup Less",
    "prefix": "<vue> setup-less",
    "scope": "vue"
  },
  "Vue setup SCSS": {
    "body": [
      "<script setup>",
      "$1",
      "</script>",
      "",
      "<template>",
      "\t$2",
      "</template>",
      "",
      "<style lang=\"scss\" scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue setup SCSS",
    "prefix": "<vue> setup-scss",
    "scope": "vue"
  },
  "Vue setup TS": {
    "body": [
      "<script setup lang=\"ts\">",
      "$1",
      "</script>",
      "",
      "<template>",
      "\t$2",
      "</template>",
      "",
      "<style scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue setup TS",
    "prefix": "<vue> setup-ts",
    "scope": "vue"
  },
  "Vue setup TS Less": {
    "body": [
      "<script setup lang=\"ts\">",
      "$1",
      "</script>",
      "",
      "<template>",
      "\t$2",
      "</template>",
      "",
      "<style lang=\"less\" scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue setup TS Less",
    "prefix": "<vue> setup-ts-less",
    "scope": "vue"
  },
  "Vue setup TS SCSS": {
    "body": [
      "<script setup lang=\"ts\">",
      "$1",
      "</script>",
      "",
      "<template>",
      "\t$2",
      "</template>",
      "",
      "<style lang=\"scss\" scoped>",
      "$0",
      "</style>",
      ""
    ],
    "description": "Vue setup TS SCSS",
    "prefix": "<vue> setup-ts-scss",
    "scope": "vue"
  }
}
```

### keybindings.json

```json
// 将键绑定放在此文件中以覆盖默认值
[
  {
    "key": ".",
    "command": ""
  }
]
```

### settings.json

```json
{
  "[powershell]": {
    "editor.tabSize": 4
  },
  "[rust]": {
    "editor.defaultFormatter": "rust-lang.rust-analyzer",
    "editor.tabSize": 4
  },
  "[stylus]": {
    "editor.defaultFormatter": "thisismanta.stylus-supremacy"
  },
  "[toml]": {
    "editor.defaultFormatter": "bodil.prettier-toml"
  },
  "editor.bracketPairColorization.enabled": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.cursorSmoothCaretAnimation": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": false,
  "editor.fontFamily": "'FiraCode Nerd Font'",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": "active",
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.smoothScrolling": true,
  "editor.tabSize": 2,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "explorer.compactFolders": false,
  "extensions.ignoreRecommendations": true,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "github.gitProtocol": "ssh",
  "javascript.suggest.paths": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "markdown-preview-github-styles.colorTheme": "system",
  "path-intellisense.mappings": {
    "/": "${workspaceFolder}",
    "@": "${workspaceFolder}/src"
  },
  "path-intellisense.showHiddenFiles": true,
  "prettier.arrowParens": "avoid",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "none",
  "security.workspace.trust.enabled": false,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.smoothScrolling": true,
  "typescript.suggest.paths": false,
  "vetur.completion.scaffoldSnippetSources": {
    "vetur": ""
  },
  "vetur.ignoreProjectWarning": true,
  "volar.autoWrapParentheses": false,
  "workbench.colorTheme": "Vitesse Dark",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.list.smoothScrolling": true,
  "workbench.startupEditor": "none"
}
```
