import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/translate/v3/openapi.yaml',
  output: './src/translate-v3/routes.ts',
  docs: {
    output: './src/translate-v3/api.md',
    curl: true,
    baseUrl: 'https://translation.googleapis.com',
  },
})
