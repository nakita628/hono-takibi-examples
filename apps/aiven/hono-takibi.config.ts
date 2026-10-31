import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.aiven.io/doc/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.aiven.io',
  },
})
