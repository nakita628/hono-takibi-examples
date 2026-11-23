import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/workflowengine/openapi-full.json',
  output: './src/workflowengine/routes.ts',
  template: {},
  type: { output: './src/workflowengine/types.ts' },
  client: { output: './src/workflowengine/client.ts', baseUrl: '/' },
  rpc: { output: './src/workflowengine/rpc.ts', parseResponse: true },
  swr: { output: './src/workflowengine/hooks/swr.ts' },
  'tanstack-query': { output: './src/workflowengine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workflowengine/hooks/preact-query.ts' },
  'solid-query': { output: './src/workflowengine/hooks/solid-query.ts' },
  'vue-query': { output: './src/workflowengine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workflowengine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workflowengine/hooks/angular-query.ts' },
  docs: {
    output: './src/workflowengine/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
