import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/neowsapp.com/1.0/openapi.yaml',
  output: './src/neowsapp/routes.ts',
  docs: {
    output: './src/neowsapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
