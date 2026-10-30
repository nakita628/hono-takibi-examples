import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://dac-static.atlassian.com/cloud/jira/service-desk/swagger.v3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://your-domain.atlassian.net',
  },
})
