import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/reseller/v1/openapi.yaml',
  output: './src/reseller/routes.ts',
  docs: {
    output: './src/reseller/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
