import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ideahub/v1alpha/openapi.yaml',
  output: './src/ideahub/routes.ts',
  docs: {
    output: './src/ideahub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
