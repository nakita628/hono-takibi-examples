import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/privateca/v1beta1/openapi.yaml',
  output: './src/privateca/routes.ts',
  docs: {
    output: './src/privateca/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
