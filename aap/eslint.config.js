import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // تجاهل ملفات الإنتاج
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      // السماح بأسماء Components
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],

      // تجاهل args غير المستخدمة مثل (_event)
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
])
