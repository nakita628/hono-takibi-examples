import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Settings API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/settings.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/settings.yaml',
  output: './src/settings/routes.ts',
  template: {},
  type: { output: './src/settings/types.ts' },
  client: { output: './src/settings/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings/rpc.ts', parseResponse: true },
  swr: { output: './src/settings/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings/hooks/angular-query.ts' },
  docs: {
    output: './src/settings/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
