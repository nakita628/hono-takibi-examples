import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/convertcurrency/1.0.0/openapi.yaml',
  output: './src/convertcurrency/routes.ts',
  docs: {
    output: './src/convertcurrency/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
