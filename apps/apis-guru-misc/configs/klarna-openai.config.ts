import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/klarna.com/openai/v0/openapi.yaml',
  output: './src/klarna-openai/routes.ts',
  docs: {
    output: './src/klarna-openai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
