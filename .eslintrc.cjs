module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 是根目录
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'prettier',
  ],
  // 解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    // 解析器
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  // 自定义规则
  rules: {
    // 打开prettier插件提供的规则
    'prettier/prettier': 'error',
    // 关闭以下规则，因为与prettier插件规则冲突
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx', '.vue', '.json'],
    },
  ],
  // 忽略项
  ignorePatterns: ['node_modules/', 'dist/', 'pnpm-lock.yaml', '*.log'],
};
