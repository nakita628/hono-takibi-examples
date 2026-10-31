import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spoonacular.com/1.1/openapi.yaml',
  output: './src/spoonacular/routes.ts',
  docs: {
    output: './src/spoonacular/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
