import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/comprehend/2017-11-27/openapi.yaml',
  output: './src/comprehend/routes.ts',
  docs: {
    output: './src/comprehend/api.md',
    curl: true,
    baseUrl: 'https://comprehend.us-east-1.amazonaws.com',
  },
})
