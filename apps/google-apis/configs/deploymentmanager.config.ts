import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/deploymentmanager/v2beta/openapi.yaml',
  output: './src/deploymentmanager/routes.ts',
  template: {},
  type: { output: './src/deploymentmanager/types.ts' },
  client: { output: './src/deploymentmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/deploymentmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/deploymentmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/deploymentmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/deploymentmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/deploymentmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/deploymentmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/deploymentmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/deploymentmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/deploymentmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
