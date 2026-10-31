import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nordigen.com/2.0 (v2)/openapi.yaml',
  output: './src/nordigen/routes.ts',
  docs: {
    output: './src/nordigen/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
