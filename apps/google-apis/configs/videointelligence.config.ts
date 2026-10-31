import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/videointelligence/v1p3beta1/openapi.yaml',
  output: './src/videointelligence/routes.ts',
  docs: {
    output: './src/videointelligence/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
