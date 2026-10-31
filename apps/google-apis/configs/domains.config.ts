import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/domains/v1beta1/openapi.yaml',
  output: './src/domains/routes.ts',
  docs: {
    output: './src/domains/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
