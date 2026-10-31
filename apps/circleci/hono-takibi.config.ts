import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://circleci.com/api/v2/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://circleci.com/api/v2',
  },
})
