import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kendra/2019-02-03/openapi.yaml',
  output: './src/kendra/routes.ts',
  docs: {
    output: './src/kendra/api.md',
    curl: true,
    baseUrl: 'https://kendra.us-east-1.amazonaws.com',
  },
})
