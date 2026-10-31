import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/pirate/1.5/openapi.yaml',
  output: './src/fungenerators-pirate/routes.ts',
  docs: {
    output: './src/fungenerators-pirate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
