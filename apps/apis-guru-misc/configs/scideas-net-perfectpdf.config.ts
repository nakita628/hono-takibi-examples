import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/scideas.net/perfectpdf/1.0/openapi.yaml',
  output: './src/scideas-net-perfectpdf/routes.ts',
  docs: {
    output: './src/scideas-net-perfectpdf/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
