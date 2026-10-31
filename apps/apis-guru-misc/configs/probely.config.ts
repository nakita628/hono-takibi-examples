import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/probely.com/1.2.0/openapi.yaml',
  output: './src/probely/routes.ts',
  docs: {
    output: './src/probely/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
