import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/whatsapp.local/1.0/openapi.yaml',
  output: './src/whatsapp/routes.ts',
  docs: {
    output: './src/whatsapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
