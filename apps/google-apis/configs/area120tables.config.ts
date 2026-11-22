import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/area120tables/v1alpha1/openapi.yaml',
  output: './src/area120tables/routes.ts',
  template: {},
  type: { output: './src/area120tables/types.ts' },
  client: { output: './src/area120tables/client.ts', baseUrl: '/' },
  rpc: { output: './src/area120tables/rpc.ts', parseResponse: true },
  swr: { output: './src/area120tables/hooks/swr.ts' },
  'tanstack-query': { output: './src/area120tables/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/area120tables/hooks/preact-query.ts' },
  'solid-query': { output: './src/area120tables/hooks/solid-query.ts' },
  'vue-query': { output: './src/area120tables/hooks/vue-query.ts' },
  'svelte-query': { output: './src/area120tables/hooks/svelte-query.ts' },
  'angular-query': { output: './src/area120tables/hooks/angular-query.ts' },
  docs: {
    output: './src/area120tables/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
