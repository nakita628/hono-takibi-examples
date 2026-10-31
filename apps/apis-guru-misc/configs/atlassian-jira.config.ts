import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/atlassian.com/jira/1001.0.0-SNAPSHOT/openapi.yaml',
  output: './src/atlassian-jira/routes.ts',
  docs: {
    output: './src/atlassian-jira/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
