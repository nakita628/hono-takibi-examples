import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pramericalife/3.0.0/openapi.yaml',
  output: './src/pramericalife/routes.ts',
  docs: {
    output: './src/pramericalife/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
