import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/phantauth.net/1.0.0/openapi.yaml',
  output: './src/phantauth-net/routes.ts',
  docs: {
    output: './src/phantauth-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
