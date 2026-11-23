import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/whapi.com/bets/2.0.0/openapi.yaml',
  output: './src/whapi-bets/routes.ts',
  template: {},
  type: { output: './src/whapi-bets/types.ts' },
  client: { output: './src/whapi-bets/client.ts', baseUrl: '/' },
  rpc: { output: './src/whapi-bets/rpc.ts', parseResponse: true },
  swr: { output: './src/whapi-bets/hooks/swr.ts' },
  'tanstack-query': { output: './src/whapi-bets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/whapi-bets/hooks/preact-query.ts' },
  'solid-query': { output: './src/whapi-bets/hooks/solid-query.ts' },
  'vue-query': { output: './src/whapi-bets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/whapi-bets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/whapi-bets/hooks/angular-query.ts' },
  docs: {
    output: './src/whapi-bets/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
