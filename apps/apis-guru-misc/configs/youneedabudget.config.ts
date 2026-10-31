import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/youneedabudget.com/1.0.0/openapi.yaml',
  output: './src/youneedabudget/routes.ts',
  docs: {
    output: './src/youneedabudget/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
