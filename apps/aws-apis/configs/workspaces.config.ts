import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workspaces/2015-04-08/openapi.yaml',
  output: './src/workspaces/routes.ts',
  template: {},
  type: { output: './src/workspaces/types.ts' },
  client: { output: './src/workspaces/client.ts', baseUrl: '/' },
  rpc: { output: './src/workspaces/rpc.ts', parseResponse: true },
  swr: { output: './src/workspaces/hooks/swr.ts' },
  'tanstack-query': { output: './src/workspaces/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workspaces/hooks/preact-query.ts' },
  'solid-query': { output: './src/workspaces/hooks/solid-query.ts' },
  'vue-query': { output: './src/workspaces/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workspaces/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workspaces/hooks/angular-query.ts' },
  docs: {
    output: './src/workspaces/api.md',
    curl: true,
    baseUrl: 'https://workspaces.us-east-1.amazonaws.com',
  },
})
