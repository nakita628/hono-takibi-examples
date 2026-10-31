import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/kgsearch/v1/openapi.yaml',
  output: './src/kgsearch/routes.ts',
  docs: {
    output: './src/kgsearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
