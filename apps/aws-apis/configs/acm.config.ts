import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/acm/2015-12-08/openapi.yaml',
  output: './src/acm/routes.ts',
  docs: {
    output: './src/acm/api.md',
    curl: true,
    baseUrl: 'https://acm.us-east-1.amazonaws.com',
  },
})
