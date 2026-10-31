import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/datumbox.com/1.0/openapi.yaml',
  output: './src/datumbox/routes.ts',
  docs: {
    output: './src/datumbox/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
