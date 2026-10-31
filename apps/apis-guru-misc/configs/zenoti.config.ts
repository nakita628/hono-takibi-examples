import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zenoti.com/1.0.0/openapi.yaml',
  output: './src/zenoti/routes.ts',
  docs: {
    output: './src/zenoti/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
