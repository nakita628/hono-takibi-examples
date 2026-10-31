import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/appsync/2017-07-25/openapi.yaml',
  output: './src/appsync/routes.ts',
  docs: {
    output: './src/appsync/api.md',
    curl: true,
    baseUrl: 'https://appsync.us-east-1.amazonaws.com',
  },
})
