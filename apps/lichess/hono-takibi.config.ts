import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://lichess.org/api/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://lichess.org',
  },
})
