import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bigoven.com/partner/openapi.yaml',
  output: './src/bigoven/routes.ts',
  docs: {
    output: './src/bigoven/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
