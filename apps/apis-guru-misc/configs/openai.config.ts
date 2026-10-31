import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openai.com/1.2.0/openapi.yaml',
  output: './src/openai/routes.ts',
  docs: {
    output: './src/openai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
