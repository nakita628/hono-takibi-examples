import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcitymatch/1.0.0/openapi.yaml',
  output: './src/getcitymatch/routes.ts',
  docs: {
    output: './src/getcitymatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
