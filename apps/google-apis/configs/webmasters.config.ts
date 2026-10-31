import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/webmasters/v3/openapi.yaml',
  output: './src/webmasters/routes.ts',
  docs: {
    output: './src/webmasters/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
