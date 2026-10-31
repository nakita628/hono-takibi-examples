import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stellastra.com/1.0/openapi.yaml',
  output: './src/stellastra/routes.ts',
  docs: {
    output: './src/stellastra/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
