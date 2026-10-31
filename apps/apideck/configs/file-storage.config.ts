import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/file-storage/9.3.0/openapi.yaml',
  output: './src/file-storage/routes.ts',
  docs: {
    output: './src/file-storage/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
