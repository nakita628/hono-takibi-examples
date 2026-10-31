import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pocketsmith.com/2.0/openapi.yaml',
  output: './src/pocketsmith/routes.ts',
  docs: {
    output: './src/pocketsmith/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
