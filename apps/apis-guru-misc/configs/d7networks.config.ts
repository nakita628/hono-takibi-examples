import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/d7networks.com/1.0.2/openapi.yaml',
  output: './src/d7networks/routes.ts',
  template: {},
  type: { output: './src/d7networks/types.ts' },
  client: { output: './src/d7networks/client.ts', baseUrl: '/' },
  rpc: { output: './src/d7networks/rpc.ts', parseResponse: true },
  swr: { output: './src/d7networks/hooks/swr.ts' },
  'tanstack-query': { output: './src/d7networks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/d7networks/hooks/preact-query.ts' },
  'solid-query': { output: './src/d7networks/hooks/solid-query.ts' },
  'vue-query': { output: './src/d7networks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/d7networks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/d7networks/hooks/angular-query.ts' },
  docs: {
    output: './src/d7networks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
