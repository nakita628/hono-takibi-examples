import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/certificates/1.0.0/openapi.yaml',
  output: './src/certificates/routes.ts',
  docs: {
    output: './src/certificates/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
