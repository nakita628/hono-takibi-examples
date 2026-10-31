import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/riddle/1.5/openapi.yaml',
  output: './src/fungenerators-riddle/routes.ts',
  docs: {
    output: './src/fungenerators-riddle/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
