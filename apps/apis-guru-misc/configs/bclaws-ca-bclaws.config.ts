import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bclaws.ca/bclaws/1.0.0/openapi.yaml',
  output: './src/bclaws-ca-bclaws/routes.ts',
  docs: {
    output: './src/bclaws-ca-bclaws/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
