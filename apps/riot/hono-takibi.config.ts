import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/MingweiSamuel/riotapi-schema/gh-pages/openapi-3.0.0.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://jp1.api.riotgames.com',
  },
})
