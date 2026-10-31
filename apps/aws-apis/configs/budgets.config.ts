import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/budgets/2016-10-20/openapi.yaml',
  output: './src/budgets/routes.ts',
  docs: {
    output: './src/budgets/api.md',
    curl: true,
    baseUrl: 'https://budgets.us-east-1.amazonaws.com',
  },
})
