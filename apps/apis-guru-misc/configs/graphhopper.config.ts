import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/graphhopper.com/1.0.0/openapi.yaml',
  output: './src/graphhopper/routes.ts',
  docs: {
    output: './src/graphhopper/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
