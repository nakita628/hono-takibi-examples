import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Content Management API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/content-management.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/content-management.yaml',
  output: './src/content-management/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/content-management/types.ts' },
  client: { output: './src/content-management/client.ts', baseUrl: '/' },
  rpc: { output: './src/content-management/rpc.ts', parseResponse: true },
  swr: { output: './src/content-management/hooks/swr.ts' },
  'tanstack-query': { output: './src/content-management/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/content-management/hooks/preact-query.ts' },
  'solid-query': { output: './src/content-management/hooks/solid-query.ts' },
  'vue-query': { output: './src/content-management/hooks/vue-query.ts' },
  'svelte-query': { output: './src/content-management/hooks/svelte-query.ts' },
  'angular-query': { output: './src/content-management/hooks/angular-query.ts' },
  docs: {
    output: './src/content-management/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
