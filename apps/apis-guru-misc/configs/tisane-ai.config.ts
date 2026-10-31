import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tisane.ai/1.0.0/openapi.yaml',
  output: './src/tisane-ai/routes.ts',
  docs: {
    output: './src/tisane-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
