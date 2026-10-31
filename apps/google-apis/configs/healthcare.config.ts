import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/healthcare/v1beta1/openapi.yaml',
  output: './src/healthcare/routes.ts',
  docs: {
    output: './src/healthcare/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
