import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ipqualityscore.com/1.0.0/openapi.yaml',
  output: './src/ipqualityscore/routes.ts',
  docs: {
    output: './src/ipqualityscore/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
