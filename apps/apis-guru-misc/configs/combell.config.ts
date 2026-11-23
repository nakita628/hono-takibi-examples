import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/combell.com/v2/openapi.yaml',
  output: './src/combell/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/combell/types.ts' },
  client: { output: './src/combell/client.ts', baseUrl: '/' },
  rpc: { output: './src/combell/rpc.ts', parseResponse: true },
  swr: { output: './src/combell/hooks/swr.ts' },
  'tanstack-query': { output: './src/combell/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/combell/hooks/preact-query.ts' },
  'solid-query': { output: './src/combell/hooks/solid-query.ts' },
  'vue-query': { output: './src/combell/hooks/vue-query.ts' },
  'svelte-query': { output: './src/combell/hooks/svelte-query.ts' },
  'angular-query': { output: './src/combell/hooks/angular-query.ts' },
  docs: {
    output: './src/combell/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
