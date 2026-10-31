import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rev.ai/v1/openapi.yaml',
  output: './src/rev-ai/routes.ts',
  docs: {
    output: './src/rev-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
