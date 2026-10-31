import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workmail/2017-10-01/openapi.yaml',
  output: './src/workmail/routes.ts',
  docs: {
    output: './src/workmail/api.md',
    curl: true,
    baseUrl: 'https://workmail.us-east-1.amazonaws.com',
  },
})
