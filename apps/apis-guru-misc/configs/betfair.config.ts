import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/betfair.com/1.0.1423/openapi.yaml',
  output: './src/betfair/routes.ts',
  template: {},
  type: { output: './src/betfair/types.ts' },
  client: { output: './src/betfair/client.ts', baseUrl: '/' },
  rpc: { output: './src/betfair/rpc.ts', parseResponse: true },
  swr: { output: './src/betfair/hooks/swr.ts' },
  'tanstack-query': { output: './src/betfair/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/betfair/hooks/preact-query.ts' },
  'solid-query': { output: './src/betfair/hooks/solid-query.ts' },
  'vue-query': { output: './src/betfair/hooks/vue-query.ts' },
  'svelte-query': { output: './src/betfair/hooks/svelte-query.ts' },
  'angular-query': { output: './src/betfair/hooks/angular-query.ts' },
  docs: {
    output: './src/betfair/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
