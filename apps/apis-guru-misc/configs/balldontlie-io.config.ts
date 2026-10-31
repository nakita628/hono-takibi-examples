import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/balldontlie.io/1.0.0/openapi.yaml',
  output: './src/balldontlie-io/routes.ts',
  docs: {
    output: './src/balldontlie-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
