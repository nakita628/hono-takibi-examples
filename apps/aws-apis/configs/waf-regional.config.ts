import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/waf-regional/2016-11-28/openapi.yaml',
  output: './src/waf-regional/routes.ts',
  docs: {
    output: './src/waf-regional/api.md',
    curl: true,
    baseUrl: 'https://waf-regional.us-east-1.amazonaws.com',
  },
})
