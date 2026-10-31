import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/recommendationengine/v1beta1/openapi.yaml',
  output: './src/recommendationengine/routes.ts',
  docs: {
    output: './src/recommendationengine/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
