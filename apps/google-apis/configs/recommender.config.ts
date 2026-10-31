import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/recommender/v1beta1/openapi.yaml',
  output: './src/recommender/routes.ts',
  docs: {
    output: './src/recommender/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
