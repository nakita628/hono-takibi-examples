import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Miscellaneous API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/miscellaneous.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/miscellaneous.yaml',
  output: './src/miscellaneous/routes.ts',
  template: {},
  type: { output: './src/miscellaneous/types.ts' },
  client: { output: './src/miscellaneous/client.ts', baseUrl: '/' },
  rpc: { output: './src/miscellaneous/rpc.ts', parseResponse: true },
  swr: { output: './src/miscellaneous/hooks/swr.ts' },
  'tanstack-query': { output: './src/miscellaneous/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/miscellaneous/hooks/preact-query.ts' },
  'solid-query': { output: './src/miscellaneous/hooks/solid-query.ts' },
  'vue-query': { output: './src/miscellaneous/hooks/vue-query.ts' },
  'svelte-query': { output: './src/miscellaneous/hooks/svelte-query.ts' },
  'angular-query': { output: './src/miscellaneous/hooks/angular-query.ts' },
  docs: {
    output: './src/miscellaneous/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
