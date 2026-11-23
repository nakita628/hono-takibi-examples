import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nfl-v3-scores/1.0/openapi.yaml',
  output: './src/nfl-v3-scores/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nfl-v3-scores/types.ts' },
  client: { output: './src/nfl-v3-scores/client.ts', baseUrl: '/' },
  rpc: { output: './src/nfl-v3-scores/rpc.ts', parseResponse: true },
  swr: { output: './src/nfl-v3-scores/hooks/swr.ts' },
  'tanstack-query': { output: './src/nfl-v3-scores/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nfl-v3-scores/hooks/preact-query.ts' },
  'solid-query': { output: './src/nfl-v3-scores/hooks/solid-query.ts' },
  'vue-query': { output: './src/nfl-v3-scores/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nfl-v3-scores/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nfl-v3-scores/hooks/angular-query.ts' },
  docs: {
    output: './src/nfl-v3-scores/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
