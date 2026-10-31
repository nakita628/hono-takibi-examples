import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wolframalpha.com/v0.1/openapi.yaml',
  output: './src/wolframalpha/routes.ts',
  docs: {
    output: './src/wolframalpha/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
