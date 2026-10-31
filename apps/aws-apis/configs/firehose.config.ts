import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/firehose/2015-08-04/openapi.yaml',
  output: './src/firehose/routes.ts',
  docs: {
    output: './src/firehose/api.md',
    curl: true,
    baseUrl: 'https://firehose.us-east-1.amazonaws.com',
  },
})
