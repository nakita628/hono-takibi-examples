import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/lookupareacode/1.0.0/openapi.yaml',
  output: './src/lookupareacode/routes.ts',
  docs: {
    output: './src/lookupareacode/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
