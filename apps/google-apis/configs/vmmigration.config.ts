import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vmmigration/v1alpha1/openapi.yaml',
  output: './src/vmmigration/routes.ts',
  template: {},
  type: { output: './src/vmmigration/types.ts' },
  client: { output: './src/vmmigration/client.ts', baseUrl: '/' },
  rpc: { output: './src/vmmigration/rpc.ts', parseResponse: true },
  swr: { output: './src/vmmigration/hooks/swr.ts' },
  'tanstack-query': { output: './src/vmmigration/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vmmigration/hooks/preact-query.ts' },
  'solid-query': { output: './src/vmmigration/hooks/solid-query.ts' },
  'vue-query': { output: './src/vmmigration/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vmmigration/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vmmigration/hooks/angular-query.ts' },
  docs: {
    output: './src/vmmigration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
