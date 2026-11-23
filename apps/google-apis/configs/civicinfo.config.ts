import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/civicinfo/v2/openapi.yaml',
  output: './src/civicinfo/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/civicinfo/types.ts' },
  client: { output: './src/civicinfo/client.ts', baseUrl: '/' },
  rpc: { output: './src/civicinfo/rpc.ts', parseResponse: true },
  swr: { output: './src/civicinfo/hooks/swr.ts' },
  'tanstack-query': { output: './src/civicinfo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/civicinfo/hooks/preact-query.ts' },
  'solid-query': { output: './src/civicinfo/hooks/solid-query.ts' },
  'vue-query': { output: './src/civicinfo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/civicinfo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/civicinfo/hooks/angular-query.ts' },
  docs: {
    output: './src/civicinfo/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
