import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/telegram.org/5.0.0/openapi.yaml',
  output: './src/telegram-org/routes.ts',
  docs: {
    output: './src/telegram-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
