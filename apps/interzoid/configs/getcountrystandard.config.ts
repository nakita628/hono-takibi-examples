import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcountrystandard/1.0.0/openapi.yaml',
  output: './src/getcountrystandard/routes.ts',
  docs: {
    output: './src/getcountrystandard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
