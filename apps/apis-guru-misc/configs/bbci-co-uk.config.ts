import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bbci.co.uk/1.0/openapi.yaml',
  output: './src/bbci-co-uk/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bbci-co-uk/types.ts' },
  client: { output: './src/bbci-co-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/bbci-co-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/bbci-co-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/bbci-co-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bbci-co-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/bbci-co-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/bbci-co-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bbci-co-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bbci-co-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/bbci-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
