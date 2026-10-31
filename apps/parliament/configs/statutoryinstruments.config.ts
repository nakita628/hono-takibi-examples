import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/statutoryinstruments/v1/openapi.yaml',
  output: './src/statutoryinstruments/routes.ts',
  docs: {
    output: './src/statutoryinstruments/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
