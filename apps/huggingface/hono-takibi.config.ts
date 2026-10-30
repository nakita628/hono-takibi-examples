import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://huggingface.co/.well-known/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://huggingface.co',
  },
})
