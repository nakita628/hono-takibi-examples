import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wiremock.org/admin/2.35.0/openapi.yaml',
  output: './src/wiremock-org-admin/routes.ts',
  docs: {
    output: './src/wiremock-org-admin/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
