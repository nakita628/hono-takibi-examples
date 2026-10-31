import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudiot/v1/openapi.yaml',
  output: './src/cloudiot/routes.ts',
  docs: {
    output: './src/cloudiot/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
