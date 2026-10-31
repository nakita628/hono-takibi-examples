import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Message-Center-API/1.0.0/openapi.yaml',
  output: './src/message-center-api/routes.ts',
  docs: {
    output: './src/message-center-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
