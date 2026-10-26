import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // OpenAI OpenAPI specification: https://github.com/openai/openai-openapi
  input: 'https://raw.githubusercontent.com/openai/openai-openapi/main/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.openai.com/v1',
  },
})
