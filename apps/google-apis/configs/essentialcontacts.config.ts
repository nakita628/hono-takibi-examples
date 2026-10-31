import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/essentialcontacts/v1/openapi.yaml',
  output: './src/essentialcontacts/routes.ts',
  docs: {
    output: './src/essentialcontacts/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
