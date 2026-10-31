import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/biztoc.com/v1/openapi.yaml',
  output: './src/biztoc/routes.ts',
  docs: {
    output: './src/biztoc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
