import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://openapi-v2.exoscale.com/source.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api-ch-gva-2.exoscale.com/v2',
  },
})
