import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/i-cue.solutions/v1/openapi.yaml',
  output: './src/i-cue-solutions/routes.ts',
  docs: {
    output: './src/i-cue-solutions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
