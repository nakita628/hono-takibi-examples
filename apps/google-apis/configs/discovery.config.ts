import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/discovery/v1/openapi.yaml',
  output: './src/discovery/routes.ts',
  template: {},
  type: { output: './src/discovery/types.ts' },
  client: { output: './src/discovery/client.ts', baseUrl: '/' },
  rpc: { output: './src/discovery/rpc.ts', parseResponse: true },
  swr: { output: './src/discovery/hooks/swr.ts' },
  'tanstack-query': { output: './src/discovery/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/discovery/hooks/preact-query.ts' },
  'solid-query': { output: './src/discovery/hooks/solid-query.ts' },
  'vue-query': { output: './src/discovery/hooks/vue-query.ts' },
  'svelte-query': { output: './src/discovery/hooks/svelte-query.ts' },
  'angular-query': { output: './src/discovery/hooks/angular-query.ts' },
  docs: {
    output: './src/discovery/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
