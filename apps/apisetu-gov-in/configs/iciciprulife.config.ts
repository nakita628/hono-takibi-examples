import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/iciciprulife/3.0.0/openapi.yaml',
  output: './src/iciciprulife/routes.ts',
  docs: {
    output: './src/iciciprulife/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
