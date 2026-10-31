import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/v1.3/openapi.yaml',
  output: './src/openbanking-org-uk/routes.ts',
  docs: {
    output: './src/openbanking-org-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
