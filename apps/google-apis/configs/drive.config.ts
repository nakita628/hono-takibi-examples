import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/drive/v3/openapi.yaml',
  output: './src/drive/routes.ts',
  docs: {
    output: './src/drive/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
