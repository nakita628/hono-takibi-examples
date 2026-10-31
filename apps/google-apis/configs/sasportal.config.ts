import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sasportal/v1alpha1/openapi.yaml',
  output: './src/sasportal/routes.ts',
  docs: {
    output: './src/sasportal/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
