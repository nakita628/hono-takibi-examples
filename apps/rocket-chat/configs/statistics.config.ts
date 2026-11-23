import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Statistics API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/statistics.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/statistics.yaml',
  output: './src/statistics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/statistics/types.ts' },
  client: { output: './src/statistics/client.ts', baseUrl: '/' },
  rpc: { output: './src/statistics/rpc.ts', parseResponse: true },
  swr: { output: './src/statistics/hooks/swr.ts' },
  'tanstack-query': { output: './src/statistics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/statistics/hooks/preact-query.ts' },
  'solid-query': { output: './src/statistics/hooks/solid-query.ts' },
  'vue-query': { output: './src/statistics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/statistics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/statistics/hooks/angular-query.ts' },
  docs: {
    output: './src/statistics/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
