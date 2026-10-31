import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/britbox.co.uk/3.730.300-ref-1-39-0/openapi.yaml',
  output: './src/britbox-co-uk/routes.ts',
  docs: {
    output: './src/britbox-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
