import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/geodesystems.com/1.0.0/openapi.yaml',
  output: './src/geodesystems/routes.ts',
  docs: {
    output: './src/geodesystems/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
