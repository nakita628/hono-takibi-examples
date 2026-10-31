import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/iptwist.com/1.0.0/openapi.yaml',
  output: './src/iptwist/routes.ts',
  docs: {
    output: './src/iptwist/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
