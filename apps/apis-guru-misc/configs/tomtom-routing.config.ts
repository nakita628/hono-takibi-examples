import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tomtom.com/routing/1.0.0/openapi.yaml',
  output: './src/tomtom-routing/routes.ts',
  docs: {
    output: './src/tomtom-routing/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
