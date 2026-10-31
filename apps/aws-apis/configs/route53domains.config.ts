import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/route53domains/2014-05-15/openapi.yaml',
  output: './src/route53domains/routes.ts',
  docs: {
    output: './src/route53domains/api.md',
    curl: true,
    baseUrl: 'https://route53domains.us-east-1.amazonaws.com',
  },
})
