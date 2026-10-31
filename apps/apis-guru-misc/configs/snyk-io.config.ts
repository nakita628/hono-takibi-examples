import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/snyk.io/1.0.0/openapi.yaml',
  output: './src/snyk-io/routes.ts',
  docs: {
    output: './src/snyk-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
