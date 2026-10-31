import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apple.com/app-store-connect/1.4.1/openapi.yaml',
  output: './src/apple-app-store-connect/routes.ts',
  docs: {
    output: './src/apple-app-store-connect/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
