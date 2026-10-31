import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/worklink/2018-09-25/openapi.yaml',
  output: './src/worklink/routes.ts',
  docs: {
    output: './src/worklink/api.md',
    curl: true,
    baseUrl: 'https://worklink.us-east-1.amazonaws.com',
  },
})
