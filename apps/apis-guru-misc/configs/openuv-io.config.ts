import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openuv.io/v1/openapi.yaml',
  output: './src/openuv-io/routes.ts',
  docs: {
    output: './src/openuv-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
