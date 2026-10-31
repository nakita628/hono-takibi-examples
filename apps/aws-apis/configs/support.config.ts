import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/support/2013-04-15/openapi.yaml',
  output: './src/support/routes.ts',
  docs: {
    output: './src/support/api.md',
    curl: true,
    baseUrl: 'https://support.us-east-1.amazonaws.com',
  },
})
