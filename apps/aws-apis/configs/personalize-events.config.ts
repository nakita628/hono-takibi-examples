import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/personalize-events/2018-03-22/openapi.yaml',
  output: './src/personalize-events/routes.ts',
  docs: {
    output: './src/personalize-events/api.md',
    curl: true,
    baseUrl: 'https://personalize-events.us-east-1.amazonaws.com',
  },
})
