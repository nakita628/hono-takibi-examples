import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cur/2017-01-06/openapi.yaml',
  output: './src/cur/routes.ts',
  docs: {
    output: './src/cur/api.md',
    curl: true,
    baseUrl: 'https://cur.us-east-1.amazonaws.com',
  },
})
