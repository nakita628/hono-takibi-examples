import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/macie2/2020-01-01/openapi.yaml',
  output: './src/macie2/routes.ts',
  docs: {
    output: './src/macie2/api.md',
    curl: true,
    baseUrl: 'https://macie2.us-east-1.amazonaws.com',
  },
})
