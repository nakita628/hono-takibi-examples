import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/eventbridge/2015-10-07/openapi.yaml',
  output: './src/eventbridge/routes.ts',
  docs: {
    output: './src/eventbridge/api.md',
    curl: true,
    baseUrl: 'https://eventbridge.us-east-1.amazonaws.com',
  },
})
