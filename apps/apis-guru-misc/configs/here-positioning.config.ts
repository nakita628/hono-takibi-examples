import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/here.com/positioning/2.1.1/openapi.yaml',
  output: './src/here-positioning/routes.ts',
  docs: {
    output: './src/here-positioning/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
