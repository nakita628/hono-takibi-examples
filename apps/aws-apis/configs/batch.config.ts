import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/batch/2016-08-10/openapi.yaml',
  output: './src/batch/routes.ts',
  docs: {
    output: './src/batch/api.md',
    curl: true,
    baseUrl: 'https://batch.us-east-1.amazonaws.com',
  },
})
