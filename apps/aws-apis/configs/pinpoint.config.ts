import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pinpoint/2016-12-01/openapi.yaml',
  output: './src/pinpoint/routes.ts',
  docs: {
    output: './src/pinpoint/api.md',
    curl: true,
    baseUrl: 'https://pinpoint.us-east-1.amazonaws.com',
  },
})
