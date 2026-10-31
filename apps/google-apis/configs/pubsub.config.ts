import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/pubsub/v1beta2/openapi.yaml',
  output: './src/pubsub/routes.ts',
  docs: {
    output: './src/pubsub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
