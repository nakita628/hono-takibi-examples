import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Marketplace Apps API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/marketplace-apps.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/marketplace-apps.yaml',
  output: './src/marketplace-apps/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/marketplace-apps/types.ts' },
  client: { output: './src/marketplace-apps/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketplace-apps/rpc.ts', parseResponse: true },
  swr: { output: './src/marketplace-apps/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketplace-apps/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketplace-apps/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketplace-apps/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketplace-apps/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketplace-apps/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketplace-apps/hooks/angular-query.ts' },
  docs: {
    output: './src/marketplace-apps/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
