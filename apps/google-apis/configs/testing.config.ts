import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/testing/v1/openapi.yaml',
  output: './src/testing/routes.ts',
  docs: {
    output: './src/testing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
