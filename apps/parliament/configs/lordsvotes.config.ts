import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/lordsvotes/v1/openapi.yaml',
  output: './src/lordsvotes/routes.ts',
  docs: {
    output: './src/lordsvotes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
