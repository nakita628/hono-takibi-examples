import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nlpcloud.io/1.0.0/openapi.yaml',
  output: './src/nlpcloud-io/routes.ts',
  docs: {
    output: './src/nlpcloud-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
