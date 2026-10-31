import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/guardduty/2017-11-28/openapi.yaml',
  output: './src/guardduty/routes.ts',
  docs: {
    output: './src/guardduty/api.md',
    curl: true,
    baseUrl: 'https://guardduty.us-east-1.amazonaws.com',
  },
})
