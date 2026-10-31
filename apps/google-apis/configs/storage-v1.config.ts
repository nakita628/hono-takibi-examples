import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/storage/v1/openapi.yaml',
  output: './src/storage-v1/routes.ts',
  docs: {
    output: './src/storage-v1/api.md',
    curl: true,
    baseUrl: 'https://storage.googleapis.com/storage/v1',
  },
})
