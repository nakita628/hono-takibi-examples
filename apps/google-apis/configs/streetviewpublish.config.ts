import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/streetviewpublish/v1/openapi.yaml',
  output: './src/streetviewpublish/routes.ts',
  docs: {
    output: './src/streetviewpublish/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
