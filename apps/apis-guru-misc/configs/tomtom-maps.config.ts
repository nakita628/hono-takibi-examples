import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tomtom.com/maps/1.0.0/openapi.yaml',
  output: './src/tomtom-maps/routes.ts',
  docs: {
    output: './src/tomtom-maps/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
