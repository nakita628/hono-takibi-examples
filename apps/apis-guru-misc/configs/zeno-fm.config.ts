import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zeno.fm/0.6-99cfdac/openapi.yaml',
  output: './src/zeno-fm/routes.ts',
  docs: {
    output: './src/zeno-fm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
