import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ipinfodb.com/1.0.0/openapi.yaml',
  output: './src/ipinfodb/routes.ts',
  docs: {
    output: './src/ipinfodb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
