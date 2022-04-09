#!/bin/bash

npm i -D eslint eslint-plugin-vue prettier
npm i -D pug pug-plain-loader sass
npm install vue-router@4

cat > .eslintrc.js <<EOF
module.exports = {
  root: true,
  env: {
      browser: true,
      es2021: true,
      node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  parserOptions: {
     ecmaVersion: 2021
  },
  plugins: [
  ],
  rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-deprecated-slot-attribute': 'warn',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'comma-dangle': [2, 'always-mulitline'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
  }
}
EOF

cat > .prettierrc.js <<EOF
module.exports = {
  printWidth: 100,
  semi: false,
  tabWidth: 2,
  useTabs: true,
  trailingComma: "es5",
  singleQuote: true
}
EOF

# cat > vite.config.js <<EOF
# import { defineConfig } from 'vite'
# import vue from '@vitejs/plugin-vue'
# import viteSvgIcons from 'vite-plugin-svg-icons'
# import path from 'path'

# // https://vitejs.dev/config/
# export default defineConfig({
# 	plugins: [
# 		vue(),
# 		viteSvgIcons({
# 			// Specify the icon folder to be cached
# 			iconDirs: [path.resolve(process.cwd(), 'src/assets/img/icons')],
# 			// Specify symbolId format
# 			symbolId: 'icon-[dir]-[name]',
# 		}),
# 	],
# 	resolve: {
# 		alias: {
# 			'@': path.resolve(__dirname, '/src')
# 		},
# 	},
# 	server: {
# 		host: true
# 	}
# })
# EOF
