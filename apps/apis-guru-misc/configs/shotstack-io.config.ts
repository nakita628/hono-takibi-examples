import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shotstack.io/v1/openapi.yaml',
  output: './src/shotstack-io/routes.ts',
  docs: {
    output: './src/shotstack-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
