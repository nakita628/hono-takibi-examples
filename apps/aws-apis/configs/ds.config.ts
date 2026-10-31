import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ds/2015-04-16/openapi.yaml',
  output: './src/ds/routes.ts',
  docs: {
    output: './src/ds/api.md',
    curl: true,
    baseUrl: 'https://ds.us-east-1.amazonaws.com',
  },
})
