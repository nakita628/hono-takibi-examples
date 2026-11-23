import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workflowexecutions/v1beta/openapi.yaml',
  output: './src/workflowexecutions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/workflowexecutions/types.ts' },
  client: { output: './src/workflowexecutions/client.ts', baseUrl: '/' },
  rpc: { output: './src/workflowexecutions/rpc.ts', parseResponse: true },
  swr: { output: './src/workflowexecutions/hooks/swr.ts' },
  'tanstack-query': { output: './src/workflowexecutions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workflowexecutions/hooks/preact-query.ts' },
  'solid-query': { output: './src/workflowexecutions/hooks/solid-query.ts' },
  'vue-query': { output: './src/workflowexecutions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workflowexecutions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workflowexecutions/hooks/angular-query.ts' },
  docs: {
    output: './src/workflowexecutions/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
