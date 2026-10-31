import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://app.getunleash.io/demo/docs/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://app.getunleash.io/demo',
  },
})
