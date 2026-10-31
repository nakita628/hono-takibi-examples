import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/slack.com/openai/v1/openapi.yaml',
  output: './src/slack-openai/routes.ts',
  docs: {
    output: './src/slack-openai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
