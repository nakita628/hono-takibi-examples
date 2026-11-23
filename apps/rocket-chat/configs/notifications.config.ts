import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Notifications API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/notifications.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/notifications.yaml',
  output: './src/notifications/routes.ts',
  template: {},
  type: { output: './src/notifications/types.ts' },
  client: { output: './src/notifications/client.ts', baseUrl: '/' },
  rpc: { output: './src/notifications/rpc.ts', parseResponse: true },
  swr: { output: './src/notifications/hooks/swr.ts' },
  'tanstack-query': { output: './src/notifications/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/notifications/hooks/preact-query.ts' },
  'solid-query': { output: './src/notifications/hooks/solid-query.ts' },
  'vue-query': { output: './src/notifications/hooks/vue-query.ts' },
  'svelte-query': { output: './src/notifications/hooks/svelte-query.ts' },
  'angular-query': { output: './src/notifications/hooks/angular-query.ts' },
  docs: {
    output: './src/notifications/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
