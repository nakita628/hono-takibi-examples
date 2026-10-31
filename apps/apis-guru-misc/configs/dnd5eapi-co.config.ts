import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dnd5eapi.co/0.1/openapi.yaml',
  output: './src/dnd5eapi-co/routes.ts',
  docs: {
    output: './src/dnd5eapi-co/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
