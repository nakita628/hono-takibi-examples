import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/golf-v2/1.0/openapi.yaml',
  output: './src/golf-v2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/golf-v2/types.ts' },
  client: { output: './src/golf-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/golf-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/golf-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/golf-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/golf-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/golf-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/golf-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/golf-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/golf-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/golf-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
