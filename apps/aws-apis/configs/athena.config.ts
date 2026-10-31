import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/athena/2017-05-18/openapi.yaml',
  output: './src/athena/routes.ts',
  docs: {
    output: './src/athena/api.md',
    curl: true,
    baseUrl: 'https://athena.us-east-1.amazonaws.com',
  },
})
