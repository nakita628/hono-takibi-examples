import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/beezup.com/2.0/openapi.yaml',
  output: './src/beezup/routes.ts',
  docs: {
    output: './src/beezup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
