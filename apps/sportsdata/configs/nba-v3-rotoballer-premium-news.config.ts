import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nba-v3-rotoballer-premium-news/1.0/openapi.yaml',
  output: './src/nba-v3-rotoballer-premium-news/routes.ts',
  template: {},
  type: { output: './src/nba-v3-rotoballer-premium-news/types.ts' },
  client: { output: './src/nba-v3-rotoballer-premium-news/client.ts', baseUrl: '/' },
  rpc: { output: './src/nba-v3-rotoballer-premium-news/rpc.ts', parseResponse: true },
  swr: { output: './src/nba-v3-rotoballer-premium-news/hooks/swr.ts' },
  'tanstack-query': { output: './src/nba-v3-rotoballer-premium-news/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nba-v3-rotoballer-premium-news/hooks/preact-query.ts' },
  'solid-query': { output: './src/nba-v3-rotoballer-premium-news/hooks/solid-query.ts' },
  'vue-query': { output: './src/nba-v3-rotoballer-premium-news/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nba-v3-rotoballer-premium-news/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nba-v3-rotoballer-premium-news/hooks/angular-query.ts' },
  docs: {
    output: './src/nba-v3-rotoballer-premium-news/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
