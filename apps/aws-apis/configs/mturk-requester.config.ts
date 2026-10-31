import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mturk-requester/2017-01-17/openapi.yaml',
  output: './src/mturk-requester/routes.ts',
  docs: {
    output: './src/mturk-requester/api.md',
    curl: true,
    baseUrl: 'https://mturk-requester.us-east-1.amazonaws.com',
  },
})
