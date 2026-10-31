import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/kinesis/2013-12-02/openapi.yaml',
  output: './src/kinesis/routes.ts',
  docs: {
    output: './src/kinesis/api.md',
    curl: true,
    baseUrl: 'https://kinesis.us-east-1.amazonaws.com',
  },
})
