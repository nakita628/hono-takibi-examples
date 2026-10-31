import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/wafv2/2019-07-29/openapi.yaml',
  output: './src/wafv2/routes.ts',
  docs: {
    output: './src/wafv2/api.md',
    curl: true,
    baseUrl: 'https://wafv2.us-east-1.amazonaws.com',
  },
})
