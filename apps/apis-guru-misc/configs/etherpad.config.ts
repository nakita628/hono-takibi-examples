import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/etherpad.local/1.2.15/openapi.yaml',
  output: './src/etherpad/routes.ts',
  docs: {
    output: './src/etherpad/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
