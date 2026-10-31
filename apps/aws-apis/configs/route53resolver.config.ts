import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/route53resolver/2018-04-01/openapi.yaml',
  output: './src/route53resolver/routes.ts',
  docs: {
    output: './src/route53resolver/api.md',
    curl: true,
    baseUrl: 'https://route53resolver.us-east-1.amazonaws.com',
  },
})
