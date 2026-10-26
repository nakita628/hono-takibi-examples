import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Jira Cloud platform REST API
  input: 'https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://your-domain.atlassian.net',
  },
})
