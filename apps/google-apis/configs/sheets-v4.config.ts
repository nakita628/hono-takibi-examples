import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/sheets/v4/openapi.yaml',
  output: './src/sheets-v4/routes.ts',
  docs: {
    output: './src/sheets-v4/api.md',
    curl: true,
    baseUrl: 'https://sheets.googleapis.com',
  },
})
