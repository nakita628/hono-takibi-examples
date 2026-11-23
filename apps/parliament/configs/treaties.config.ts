import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/treaties/v1/openapi.yaml',
  output: './src/treaties/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/treaties/types.ts' },
  client: { output: './src/treaties/client.ts', baseUrl: '/' },
  rpc: { output: './src/treaties/rpc.ts', parseResponse: true },
  swr: { output: './src/treaties/hooks/swr.ts' },
  'tanstack-query': { output: './src/treaties/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/treaties/hooks/preact-query.ts' },
  'solid-query': { output: './src/treaties/hooks/solid-query.ts' },
  'vue-query': { output: './src/treaties/hooks/vue-query.ts' },
  'svelte-query': { output: './src/treaties/hooks/svelte-query.ts' },
  'angular-query': { output: './src/treaties/hooks/angular-query.ts' },
  docs: {
    output: './src/treaties/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
