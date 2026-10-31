import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bungie.net/2.18.0/openapi.yaml',
  output: './src/bungie-net/routes.ts',
  docs: {
    output: './src/bungie-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
