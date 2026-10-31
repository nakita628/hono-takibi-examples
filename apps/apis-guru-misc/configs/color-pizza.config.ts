import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/color.pizza/1.0.0/openapi.yaml',
  output: './src/color-pizza/routes.ts',
  docs: {
    output: './src/color-pizza/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
