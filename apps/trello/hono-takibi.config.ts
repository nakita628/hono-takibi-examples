import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://developer.atlassian.com/cloud/trello/swagger.v3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.trello.com/1',
  },
})
