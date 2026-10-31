import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apache.org/qakka/v1/openapi.yaml',
  output: './src/apache-org-qakka/routes.ts',
  docs: {
    output: './src/apache-org-qakka/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
