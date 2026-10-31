import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/s3/2006-03-01/openapi.yaml',
  output: './src/s3/routes.ts',
  docs: {
    output: './src/s3/api.md',
    curl: true,
    baseUrl: 'https://s3.amazonaws.com',
  },
})
