import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/archive.org/wayback/1.0.0/openapi.yaml',
  output: './src/archive-org-wayback/routes.ts',
  docs: {
    output: './src/archive-org-wayback/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
