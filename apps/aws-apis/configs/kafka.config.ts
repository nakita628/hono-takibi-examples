import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/kafka/2018-11-14/openapi.yaml',
  output: './src/kafka/routes.ts',
  docs: {
    output: './src/kafka/api.md',
    curl: true,
    baseUrl: 'https://kafka.us-east-1.amazonaws.com',
  },
})
