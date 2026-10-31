import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sourcerepo/v1/openapi.yaml',
  output: './src/sourcerepo/routes.ts',
  docs: {
    output: './src/sourcerepo/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
