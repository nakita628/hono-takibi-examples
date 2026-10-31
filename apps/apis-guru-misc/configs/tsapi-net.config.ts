import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tsapi.net/v1/openapi.yaml',
  output: './src/tsapi-net/routes.ts',
  docs: {
    output: './src/tsapi-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
