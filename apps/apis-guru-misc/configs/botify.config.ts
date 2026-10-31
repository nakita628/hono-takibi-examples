import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/botify.com/1.0.0/openapi.yaml',
  output: './src/botify/routes.ts',
  docs: {
    output: './src/botify/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
