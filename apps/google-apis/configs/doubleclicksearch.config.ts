import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/doubleclicksearch/v2/openapi.yaml',
  output: './src/doubleclicksearch/routes.ts',
  docs: {
    output: './src/doubleclicksearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
