import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/treaties/v1/openapi.yaml',
  output: './src/treaties/routes.ts',
  docs: {
    output: './src/treaties/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
