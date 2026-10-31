import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dialogflow/v3beta1/openapi.yaml',
  output: './src/dialogflow/routes.ts',
  docs: {
    output: './src/dialogflow/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
