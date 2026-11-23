import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/atlassian.com/jira/1001.0.0-SNAPSHOT/openapi.yaml',
  output: './src/atlassian-jira/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/atlassian-jira/types.ts' },
  client: { output: './src/atlassian-jira/client.ts', baseUrl: '/' },
  rpc: { output: './src/atlassian-jira/rpc.ts', parseResponse: true },
  swr: { output: './src/atlassian-jira/hooks/swr.ts' },
  'tanstack-query': { output: './src/atlassian-jira/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/atlassian-jira/hooks/preact-query.ts' },
  'solid-query': { output: './src/atlassian-jira/hooks/solid-query.ts' },
  'vue-query': { output: './src/atlassian-jira/hooks/vue-query.ts' },
  'svelte-query': { output: './src/atlassian-jira/hooks/svelte-query.ts' },
  'angular-query': { output: './src/atlassian-jira/hooks/angular-query.ts' },
  docs: {
    output: './src/atlassian-jira/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
