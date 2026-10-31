import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codecommit/2015-04-13/openapi.yaml',
  output: './src/codecommit/routes.ts',
  docs: {
    output: './src/codecommit/api.md',
    curl: true,
    baseUrl: 'https://codecommit.us-east-1.amazonaws.com',
  },
})
