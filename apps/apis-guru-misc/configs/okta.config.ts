import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/okta.local/1.0.0/openapi.yaml',
  output: './src/okta/routes.ts',
  docs: {
    output: './src/okta/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
