import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Integrations API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/integrations.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/integrations.yaml',
  output: './src/integrations/routes.ts',
  template: {},
  type: { output: './src/integrations/types.ts' },
  client: { output: './src/integrations/client.ts', baseUrl: '/' },
  rpc: { output: './src/integrations/rpc.ts', parseResponse: true },
  swr: { output: './src/integrations/hooks/swr.ts' },
  'tanstack-query': { output: './src/integrations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/integrations/hooks/preact-query.ts' },
  'solid-query': { output: './src/integrations/hooks/solid-query.ts' },
  'vue-query': { output: './src/integrations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/integrations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/integrations/hooks/angular-query.ts' },
  docs: {
    output: './src/integrations/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
