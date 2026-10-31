import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/symanto.net/1.0/openapi.yaml',
  output: './src/symanto-net/routes.ts',
  docs: {
    output: './src/symanto-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
