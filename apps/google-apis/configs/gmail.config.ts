import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gmail/v1/openapi.yaml',
  output: './src/gmail/routes.ts',
  docs: {
    output: './src/gmail/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
