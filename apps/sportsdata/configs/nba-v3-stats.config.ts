import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nba-v3-stats/1.0/openapi.yaml',
  output: './src/nba-v3-stats/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nba-v3-stats/types.ts' },
  client: { output: './src/nba-v3-stats/client.ts', baseUrl: '/' },
  rpc: { output: './src/nba-v3-stats/rpc.ts', parseResponse: true },
  swr: { output: './src/nba-v3-stats/hooks/swr.ts' },
  'tanstack-query': { output: './src/nba-v3-stats/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nba-v3-stats/hooks/preact-query.ts' },
  'solid-query': { output: './src/nba-v3-stats/hooks/solid-query.ts' },
  'vue-query': { output: './src/nba-v3-stats/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nba-v3-stats/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nba-v3-stats/hooks/angular-query.ts' },
  docs: {
    output: './src/nba-v3-stats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
