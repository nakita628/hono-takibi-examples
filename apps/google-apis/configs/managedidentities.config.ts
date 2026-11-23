import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/managedidentities/v1alpha1/openapi.yaml',
  output: './src/managedidentities/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/managedidentities/types.ts' },
  client: { output: './src/managedidentities/client.ts', baseUrl: '/' },
  rpc: { output: './src/managedidentities/rpc.ts', parseResponse: true },
  swr: { output: './src/managedidentities/hooks/swr.ts' },
  'tanstack-query': { output: './src/managedidentities/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/managedidentities/hooks/preact-query.ts' },
  'solid-query': { output: './src/managedidentities/hooks/solid-query.ts' },
  'vue-query': { output: './src/managedidentities/hooks/vue-query.ts' },
  'svelte-query': { output: './src/managedidentities/hooks/svelte-query.ts' },
  'angular-query': { output: './src/managedidentities/hooks/angular-query.ts' },
  docs: {
    output: './src/managedidentities/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
