import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcitystandard/1.0.0/openapi.yaml',
  output: './src/getcitystandard/routes.ts',
  docs: {
    output: './src/getcitystandard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
