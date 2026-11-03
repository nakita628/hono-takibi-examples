import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // DeepL API: https://github.com/DeepL/openapi
  input: 'https://raw.githubusercontent.com/DeepL/openapi/main/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.deepl.com',
  },
})
