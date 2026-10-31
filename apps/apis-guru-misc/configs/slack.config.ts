import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/slack.com/1.7.0/openapi.yaml',
  output: './src/slack/routes.ts',
  docs: {
    output: './src/slack/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
