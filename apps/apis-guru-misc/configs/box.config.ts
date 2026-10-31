import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/box.com/2.0.0/openapi.yaml',
  output: './src/box/routes.ts',
  docs: {
    output: './src/box/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
