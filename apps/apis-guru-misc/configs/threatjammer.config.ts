import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/threatjammer.com/1.2.20/openapi.yaml',
  output: './src/threatjammer/routes.ts',
  docs: {
    output: './src/threatjammer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
