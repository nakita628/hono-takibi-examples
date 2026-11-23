import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/football-prediction/2/openapi.yaml',
  output: './src/rapidapi-football-prediction/routes.ts',
  template: {},
  type: { output: './src/rapidapi-football-prediction/types.ts' },
  client: { output: './src/rapidapi-football-prediction/client.ts', baseUrl: '/' },
  rpc: { output: './src/rapidapi-football-prediction/rpc.ts', parseResponse: true },
  swr: { output: './src/rapidapi-football-prediction/hooks/swr.ts' },
  'tanstack-query': { output: './src/rapidapi-football-prediction/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rapidapi-football-prediction/hooks/preact-query.ts' },
  'solid-query': { output: './src/rapidapi-football-prediction/hooks/solid-query.ts' },
  'vue-query': { output: './src/rapidapi-football-prediction/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rapidapi-football-prediction/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rapidapi-football-prediction/hooks/angular-query.ts' },
  docs: {
    output: './src/rapidapi-football-prediction/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
