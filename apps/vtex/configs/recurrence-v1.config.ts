import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Recurrence-(v1-/1.0/openapi.yaml',
  output: './src/recurrence-v1/routes.ts',
  docs: {
    output: './src/recurrence-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
