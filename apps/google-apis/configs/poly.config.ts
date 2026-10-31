import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/poly/v1/openapi.yaml',
  output: './src/poly/routes.ts',
  docs: {
    output: './src/poly/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
