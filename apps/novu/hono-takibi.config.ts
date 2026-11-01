import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.novu.co/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.novu.co',
  },
})
