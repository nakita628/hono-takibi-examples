import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Hookdeck Admin REST API, official OpenAPI spec:
  // https://github.com/hookdeck/hookdeck-api-schema/blob/b1daf8b8f817f4e5d5f416e6ffb99e5a5caeee73/openapi.json
  input: 'https://raw.githubusercontent.com/hookdeck/hookdeck-api-schema/main/openapi.json',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.hookdeck.com/2024-09-01',
  },
})
