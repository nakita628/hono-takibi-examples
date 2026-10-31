import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/snowball/2016-06-30/openapi.yaml',
  output: './src/snowball/routes.ts',
  docs: {
    output: './src/snowball/api.md',
    curl: true,
    baseUrl: 'https://snowball.us-east-1.amazonaws.com',
  },
})
