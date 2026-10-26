import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Mistral AI API (mistralai/platform-docs-public)
  input: 'https://raw.githubusercontent.com/mistralai/platform-docs-public/main/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.mistral.ai',
  },
})
