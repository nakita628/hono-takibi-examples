import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/uuid/1.5/openapi.yaml',
  output: './src/fungenerators-uuid/routes.ts',
  docs: {
    output: './src/fungenerators-uuid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
