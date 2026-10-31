import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/icons8.com/1.0.0/openapi.yaml',
  output: './src/icons8/routes.ts',
  docs: {
    output: './src/icons8/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
