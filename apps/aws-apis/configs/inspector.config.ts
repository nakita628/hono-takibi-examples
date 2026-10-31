import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/inspector/2016-02-16/openapi.yaml',
  output: './src/inspector/routes.ts',
  docs: {
    output: './src/inspector/api.md',
    curl: true,
    baseUrl: 'https://inspector.us-east-1.amazonaws.com',
  },
})
