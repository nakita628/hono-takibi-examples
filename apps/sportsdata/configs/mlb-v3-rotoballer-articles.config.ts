import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/mlb-v3-rotoballer-articles/1.0/openapi.yaml',
  output: './src/mlb-v3-rotoballer-articles/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mlb-v3-rotoballer-articles/types.ts' },
  client: { output: './src/mlb-v3-rotoballer-articles/client.ts', baseUrl: '/' },
  rpc: { output: './src/mlb-v3-rotoballer-articles/rpc.ts', parseResponse: true },
  swr: { output: './src/mlb-v3-rotoballer-articles/hooks/swr.ts' },
  'tanstack-query': { output: './src/mlb-v3-rotoballer-articles/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mlb-v3-rotoballer-articles/hooks/preact-query.ts' },
  'solid-query': { output: './src/mlb-v3-rotoballer-articles/hooks/solid-query.ts' },
  'vue-query': { output: './src/mlb-v3-rotoballer-articles/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mlb-v3-rotoballer-articles/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mlb-v3-rotoballer-articles/hooks/angular-query.ts' },
  docs: {
    output: './src/mlb-v3-rotoballer-articles/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
