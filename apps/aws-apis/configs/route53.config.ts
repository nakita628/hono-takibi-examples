import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/route53/2013-04-01/openapi.yaml',
  output: './src/route53/routes.ts',
  docs: {
    output: './src/route53/api.md',
    curl: true,
    baseUrl: 'https://route53.us-east-1.amazonaws.com',
  },
})
