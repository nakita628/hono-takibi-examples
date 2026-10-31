import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pdfblocks.com/1.5.0/openapi.yaml',
  output: './src/pdfblocks/routes.ts',
  docs: {
    output: './src/pdfblocks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
