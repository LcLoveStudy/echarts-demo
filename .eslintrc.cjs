/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard',
    'prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭对组件名称的检查
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error', // v-for中禁止无用的变量
    'vue/no-use-v-if-with-v-for': 'error', // 不可以同时使用v-for和v-if
    'vue/no-useless-template-attributes': 'error',
    'vue/require-v-for-key': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error', // 禁止deprecated和destroyed生命周期
    eqeqeq: 'error', // 严格区分==和===
    'max-lines': ['error', { max: 500, skipComments: false, skipBlankLines: false }],
    'no-alert': 'error', // 禁止使用alert
    'no-empty': 'error', // 禁止使用空块语句
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 禁止使用空函数(允许箭头函数)
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }], // 禁止使用链式赋值表达式
    'no-duplicate-imports': 'error', // 禁止重复的模块导入
    'no-use-before-define': 'error', // 定义之前不可以使用变量
    'no-multiple-empty-lines': 'error', // 禁止多个空行
    'no-redeclare': 'error', // 禁止变量重新声明
    'no-shadow': 'off', // 禁止在外部作用域中声明的隐藏变量中的变量声明
    'no-undef-init': 'error', // 不允许将变量初始化为 undefined
    'no-useless-return': 'error', // 不允许多余的返回语句
    'no-var': 'error', // 需要 let 或 const 而不是 var
    'require-await': 'off' // 没有await时禁止使用async
  }
}
