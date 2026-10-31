import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/randommer.io/v1/openapi.yaml',
  output: './src/randommer-io/routes.ts',
  docs: {
    output: './src/randommer-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
