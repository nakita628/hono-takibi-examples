import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stoplight.io/api-v1/openapi.yaml',
  output: './src/stoplight-io/routes.ts',
  docs: {
    output: './src/stoplight-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
