import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/listennotes.com/2.0/openapi.yaml',
  output: './src/listennotes/routes.ts',
  docs: {
    output: './src/listennotes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
