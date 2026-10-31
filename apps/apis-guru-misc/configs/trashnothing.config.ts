import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trashnothing.com/1.3/openapi.yaml',
  output: './src/trashnothing/routes.ts',
  docs: {
    output: './src/trashnothing/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
