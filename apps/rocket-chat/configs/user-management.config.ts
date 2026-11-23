import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat User Management API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/user-management.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/user-management.yaml',
  output: './src/user-management/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/user-management/types.ts' },
  client: { output: './src/user-management/client.ts', baseUrl: '/' },
  rpc: { output: './src/user-management/rpc.ts', parseResponse: true },
  swr: { output: './src/user-management/hooks/swr.ts' },
  'tanstack-query': { output: './src/user-management/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/user-management/hooks/preact-query.ts' },
  'solid-query': { output: './src/user-management/hooks/solid-query.ts' },
  'vue-query': { output: './src/user-management/hooks/vue-query.ts' },
  'svelte-query': { output: './src/user-management/hooks/svelte-query.ts' },
  'angular-query': { output: './src/user-management/hooks/angular-query.ts' },
  docs: {
    output: './src/user-management/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
