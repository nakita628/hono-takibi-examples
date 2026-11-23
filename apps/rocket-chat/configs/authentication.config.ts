import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Authentication API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/authentication.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/authentication.yaml',
  output: './src/authentication/routes.ts',
  template: {},
  type: { output: './src/authentication/types.ts' },
  client: { output: './src/authentication/client.ts', baseUrl: '/' },
  rpc: { output: './src/authentication/rpc.ts', parseResponse: true },
  swr: { output: './src/authentication/hooks/swr.ts' },
  'tanstack-query': { output: './src/authentication/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/authentication/hooks/preact-query.ts' },
  'solid-query': { output: './src/authentication/hooks/solid-query.ts' },
  'vue-query': { output: './src/authentication/hooks/vue-query.ts' },
  'svelte-query': { output: './src/authentication/hooks/svelte-query.ts' },
  'angular-query': { output: './src/authentication/hooks/angular-query.ts' },
  docs: {
    output: './src/authentication/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
