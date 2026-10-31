import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/shakespeare/1.5/openapi.yaml',
  output: './src/fungenerators-shakespeare/routes.ts',
  docs: {
    output: './src/fungenerators-shakespeare/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
