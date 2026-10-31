import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.ibkr.com/gw/api/v3/api-docs',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.ibkr.com',
  },
})
