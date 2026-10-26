import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Confluence Cloud REST API
  input: 'https://developer.atlassian.com/cloud/confluence/swagger.v3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://your-domain.atlassian.net/wiki',
  },
})
