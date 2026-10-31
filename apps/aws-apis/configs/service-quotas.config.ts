import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/service-quotas/2019-06-24/openapi.yaml',
  output: './src/service-quotas/routes.ts',
  docs: {
    output: './src/service-quotas/api.md',
    curl: true,
    baseUrl: 'https://service-quotas.us-east-1.amazonaws.com',
  },
})
