import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gmailpostmastertools/v1beta1/openapi.yaml',
  output: './src/gmailpostmastertools/routes.ts',
  docs: {
    output: './src/gmailpostmastertools/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
