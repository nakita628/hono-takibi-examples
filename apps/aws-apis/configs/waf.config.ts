import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/waf/2015-08-24/openapi.yaml',
  output: './src/waf/routes.ts',
  docs: {
    output: './src/waf/api.md',
    curl: true,
    baseUrl: 'https://waf.us-east-1.amazonaws.com',
  },
})
