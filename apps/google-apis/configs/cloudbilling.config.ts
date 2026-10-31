import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudbilling/v1beta/openapi.yaml',
  output: './src/cloudbilling/routes.ts',
  docs: {
    output: './src/cloudbilling/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
