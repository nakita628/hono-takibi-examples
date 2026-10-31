import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/assess/1.0/openapi.yaml',
  output: './src/codat-io-assess/routes.ts',
  docs: {
    output: './src/codat-io-assess/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
