import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportas/3.0.0/openapi.yaml',
  output: './src/transportas/routes.ts',
  docs: {
    output: './src/transportas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
