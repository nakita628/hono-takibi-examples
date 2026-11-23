import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Messaging API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/messaging.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/messaging.yaml',
  output: './src/messaging/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/messaging/types.ts' },
  client: { output: './src/messaging/client.ts', baseUrl: '/' },
  rpc: { output: './src/messaging/rpc.ts', parseResponse: true },
  swr: { output: './src/messaging/hooks/swr.ts' },
  'tanstack-query': { output: './src/messaging/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/messaging/hooks/preact-query.ts' },
  'solid-query': { output: './src/messaging/hooks/solid-query.ts' },
  'vue-query': { output: './src/messaging/hooks/vue-query.ts' },
  'svelte-query': { output: './src/messaging/hooks/svelte-query.ts' },
  'angular-query': { output: './src/messaging/hooks/angular-query.ts' },
  docs: {
    output: './src/messaging/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
