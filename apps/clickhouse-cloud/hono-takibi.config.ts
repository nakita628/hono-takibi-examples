import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.clickhouse.cloud/v1',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.clickhouse.cloud',
  },
})
