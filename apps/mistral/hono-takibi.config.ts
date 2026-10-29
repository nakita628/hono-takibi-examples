import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Mistral AI API (docs.mistral.ai)
  input: 'https://docs.mistral.ai/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.mistral.ai',
  },
})
