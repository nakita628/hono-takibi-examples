import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mercure.local/0.3.2/openapi.yaml',
  output: './src/mercure/routes.ts',
  docs: {
    output: './src/mercure/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
