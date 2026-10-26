import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/box/box-openapi/main/openapi/openapi-v2026.0.json',
  output: './src/v2026.0/routes.ts',
  docs: {
    output: './src/v2026.0/api.md',
    curl: true,
    baseUrl: 'https://api.box.com/2.0',
  },
})
