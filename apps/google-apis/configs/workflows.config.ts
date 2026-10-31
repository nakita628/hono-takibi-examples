import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workflows/v1beta/openapi.yaml',
  output: './src/workflows/routes.ts',
  docs: {
    output: './src/workflows/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
