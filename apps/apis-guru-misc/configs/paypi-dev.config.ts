import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/paypi.dev/1.0.0/openapi.yaml',
  output: './src/paypi-dev/routes.ts',
  docs: {
    output: './src/paypi-dev/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
