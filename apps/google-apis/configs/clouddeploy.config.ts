import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/clouddeploy/v1/openapi.yaml',
  output: './src/clouddeploy/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/clouddeploy/types.ts' },
  client: { output: './src/clouddeploy/client.ts', baseUrl: '/' },
  rpc: { output: './src/clouddeploy/rpc.ts', parseResponse: true },
  swr: { output: './src/clouddeploy/hooks/swr.ts' },
  'tanstack-query': { output: './src/clouddeploy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clouddeploy/hooks/preact-query.ts' },
  'solid-query': { output: './src/clouddeploy/hooks/solid-query.ts' },
  'vue-query': { output: './src/clouddeploy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clouddeploy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clouddeploy/hooks/angular-query.ts' },
  docs: {
    output: './src/clouddeploy/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
