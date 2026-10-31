import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/abuse/1.0.0/openapi.yaml',
  output: './src/abuse/routes.ts',
  docs: {
    output: './src/abuse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
