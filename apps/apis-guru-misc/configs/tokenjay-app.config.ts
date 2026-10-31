import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tokenjay.app/1.0.0/openapi.yaml',
  output: './src/tokenjay-app/routes.ts',
  docs: {
    output: './src/tokenjay-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
