import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/medium.com/1.0/openapi.yaml',
  output: './src/medium/routes.ts',
  docs: {
    output: './src/medium/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
