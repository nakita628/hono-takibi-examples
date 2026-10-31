import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cloudrf.com/2.0.0/openapi.yaml',
  output: './src/cloudrf/routes.ts',
  docs: {
    output: './src/cloudrf/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
