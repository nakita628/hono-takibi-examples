import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/states/2016-11-23/openapi.yaml',
  output: './src/states/routes.ts',
  docs: {
    output: './src/states/api.md',
    curl: true,
    baseUrl: 'https://states.us-east-1.amazonaws.com',
  },
})
