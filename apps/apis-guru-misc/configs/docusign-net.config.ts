import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/docusign.net/v2.1/openapi.yaml',
  output: './src/docusign-net/routes.ts',
  docs: {
    output: './src/docusign-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
