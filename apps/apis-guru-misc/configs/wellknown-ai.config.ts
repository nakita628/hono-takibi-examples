import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wellknown.ai/1.0.0/openapi.yaml',
  output: './src/wellknown-ai/routes.ts',
  docs: {
    output: './src/wellknown-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
