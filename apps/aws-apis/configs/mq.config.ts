import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/mq/2017-11-27/openapi.yaml',
  output: './src/mq/routes.ts',
  docs: {
    output: './src/mq/api.md',
    curl: true,
    baseUrl: 'https://mq.us-east-1.amazonaws.com',
  },
})
