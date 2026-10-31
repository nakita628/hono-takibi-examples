import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exavault.com/2.0/openapi.yaml',
  output: './src/exavault/routes.ts',
  docs: {
    output: './src/exavault/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
