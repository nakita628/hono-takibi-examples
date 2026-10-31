import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.opendota.com/api',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.opendota.com/api',
  },
})
