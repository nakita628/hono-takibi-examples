import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/unicourt.com/1.0.0/openapi.yaml',
  output: './src/unicourt/routes.ts',
  docs: {
    output: './src/unicourt/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
