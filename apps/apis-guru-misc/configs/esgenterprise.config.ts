import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/esgenterprise.com/1.0.0/openapi.yaml',
  output: './src/esgenterprise/routes.ts',
  docs: {
    output: './src/esgenterprise/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
