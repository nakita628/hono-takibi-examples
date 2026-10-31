import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/content/v2.1/openapi.yaml',
  output: './src/content/routes.ts',
  docs: {
    output: './src/content/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
