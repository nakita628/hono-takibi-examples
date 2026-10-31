import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.polygon.io/openapi',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.polygon.io',
  },
})
