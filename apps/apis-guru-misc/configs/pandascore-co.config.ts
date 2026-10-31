import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pandascore.co/2.23.1/openapi.yaml',
  output: './src/pandascore-co/routes.ts',
  docs: {
    output: './src/pandascore-co/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
