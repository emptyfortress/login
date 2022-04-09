module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-deprecated-slot-attribute': 'warn',
		// indent: ['error', 'tab'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		// 'comma-dangle': [2, 'always-mulitline'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
