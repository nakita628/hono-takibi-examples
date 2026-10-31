import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cpy.re/peertube/5.1.0/openapi.yaml',
  output: './src/cpy-re-peertube/routes.ts',
  docs: {
    output: './src/cpy-re-peertube/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
