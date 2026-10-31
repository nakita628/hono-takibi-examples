import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/jikan-me/jikan-rest/master/storage/api-docs/api-docs.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.jikan.moe/v4',
  },
})
