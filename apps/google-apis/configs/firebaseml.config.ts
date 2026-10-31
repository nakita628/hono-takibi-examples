import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaseml/v1beta2/openapi.yaml',
  output: './src/firebaseml/routes.ts',
  docs: {
    output: './src/firebaseml/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
