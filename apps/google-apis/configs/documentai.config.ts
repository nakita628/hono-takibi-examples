import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/documentai/v1beta3/openapi.yaml',
  output: './src/documentai/routes.ts',
  docs: {
    output: './src/documentai/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
