import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/translate/2017-07-01/openapi.yaml',
  output: './src/translate/routes.ts',
  docs: {
    output: './src/translate/api.md',
    curl: true,
    baseUrl: 'https://translate.us-east-1.amazonaws.com',
  },
})
