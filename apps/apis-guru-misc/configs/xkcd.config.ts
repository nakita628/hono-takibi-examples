import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml',
  output: './src/xkcd/routes.ts',
  docs: {
    output: './src/xkcd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
