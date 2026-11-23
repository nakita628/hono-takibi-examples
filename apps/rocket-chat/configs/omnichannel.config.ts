import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Omnichannel API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/omnichannel.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/omnichannel.yaml',
  output: './src/omnichannel/routes.ts',
  template: {},
  type: { output: './src/omnichannel/types.ts' },
  client: { output: './src/omnichannel/client.ts', baseUrl: '/' },
  rpc: { output: './src/omnichannel/rpc.ts', parseResponse: true },
  swr: { output: './src/omnichannel/hooks/swr.ts' },
  'tanstack-query': { output: './src/omnichannel/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/omnichannel/hooks/preact-query.ts' },
  'solid-query': { output: './src/omnichannel/hooks/solid-query.ts' },
  'vue-query': { output: './src/omnichannel/hooks/vue-query.ts' },
  'svelte-query': { output: './src/omnichannel/hooks/svelte-query.ts' },
  'angular-query': { output: './src/omnichannel/hooks/angular-query.ts' },
  docs: {
    output: './src/omnichannel/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
