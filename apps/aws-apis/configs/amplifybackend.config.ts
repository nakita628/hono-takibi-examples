import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/amplifybackend/2020-08-11/openapi.yaml',
  output: './src/amplifybackend/routes.ts',
  docs: {
    output: './src/amplifybackend/api.md',
    curl: true,
    baseUrl: 'https://amplifybackend.us-east-1.amazonaws.com',
  },
})
