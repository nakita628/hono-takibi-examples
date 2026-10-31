import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/barcode/1.5/openapi.yaml',
  output: './src/fungenerators-barcode/routes.ts',
  docs: {
    output: './src/fungenerators-barcode/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
