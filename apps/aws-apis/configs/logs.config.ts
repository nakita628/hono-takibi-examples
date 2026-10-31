import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/logs/2014-03-28/openapi.yaml',
  output: './src/logs/routes.ts',
  docs: {
    output: './src/logs/api.md',
    curl: true,
    baseUrl: 'https://logs.us-east-1.amazonaws.com',
  },
})
