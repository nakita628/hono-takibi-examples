import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bajajallianzlife/3.0.0/openapi.yaml',
  output: './src/bajajallianzlife/routes.ts',
  docs: {
    output: './src/bajajallianzlife/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
