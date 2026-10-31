import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lufthansa.com/partner/1.0/openapi.yaml',
  output: './src/lufthansa-partner/routes.ts',
  docs: {
    output: './src/lufthansa-partner/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
