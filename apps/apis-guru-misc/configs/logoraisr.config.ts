import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/logoraisr.com/v1/openapi.yaml',
  output: './src/logoraisr/routes.ts',
  docs: {
    output: './src/logoraisr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
