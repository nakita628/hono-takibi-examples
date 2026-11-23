import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nfl-v3-play-by-play/1.0/openapi.yaml',
  output: './src/nfl-v3-play-by-play/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nfl-v3-play-by-play/types.ts' },
  client: { output: './src/nfl-v3-play-by-play/client.ts', baseUrl: '/' },
  rpc: { output: './src/nfl-v3-play-by-play/rpc.ts', parseResponse: true },
  swr: { output: './src/nfl-v3-play-by-play/hooks/swr.ts' },
  'tanstack-query': { output: './src/nfl-v3-play-by-play/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nfl-v3-play-by-play/hooks/preact-query.ts' },
  'solid-query': { output: './src/nfl-v3-play-by-play/hooks/solid-query.ts' },
  'vue-query': { output: './src/nfl-v3-play-by-play/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nfl-v3-play-by-play/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nfl-v3-play-by-play/hooks/angular-query.ts' },
  docs: {
    output: './src/nfl-v3-play-by-play/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
