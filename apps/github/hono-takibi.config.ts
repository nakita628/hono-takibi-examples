import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // GitHub REST API description: https://github.com/github/rest-api-description
  input:
    'https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.github.com',
  },
})
