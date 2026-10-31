import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/drive/v3/openapi.yaml',
  output: './src/drive-v3/routes.ts',
  docs: {
    output: './src/drive-v3/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com/drive/v3',
  },
})
