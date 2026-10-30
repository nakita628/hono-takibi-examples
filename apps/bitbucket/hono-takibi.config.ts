import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://developer.atlassian.com/cloud/bitbucket/swagger.v3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.bitbucket.org/2.0',
  },
})
