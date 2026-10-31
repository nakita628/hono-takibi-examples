import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openindex.ai/1.0.0/openapi.yaml',
  output: './src/openindex-ai/routes.ts',
  docs: {
    output: './src/openindex-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
