import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Policies-System-API/1.0.0/openapi.yaml',
  output: './src/policies-system-api/routes.ts',
  docs: {
    output: './src/policies-system-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
