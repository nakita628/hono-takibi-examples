import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/departureboard.io/2.0/openapi.yaml',
  output: './src/departureboard-io/routes.ts',
  docs: {
    output: './src/departureboard-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
