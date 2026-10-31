import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/searchads360/v0/openapi.yaml',
  output: './src/searchads360/routes.ts',
  docs: {
    output: './src/searchads360/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
