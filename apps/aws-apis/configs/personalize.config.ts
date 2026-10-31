import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/personalize/2018-05-22/openapi.yaml',
  output: './src/personalize/routes.ts',
  docs: {
    output: './src/personalize/api.md',
    curl: true,
    baseUrl: 'https://personalize.us-east-1.amazonaws.com',
  },
})
