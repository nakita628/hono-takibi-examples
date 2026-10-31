import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tcgdex.net/2.0.0/openapi.yaml',
  output: './src/tcgdex-net/routes.ts',
  docs: {
    output: './src/tcgdex-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
