import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Stoat API, official OpenAPI spec:
  // https://github.com/stoatchat/javascript-client-api/blob/9801fae4cbd789abfe58f9fb2fb161bd328c7e7f/OpenAPI.json
  input: 'https://raw.githubusercontent.com/stoatchat/javascript-client-api/main/OpenAPI.json',
  output: './src/routes.ts',
  template: { routeHandler: true },
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
    baseUrl: 'https://api.stoat.chat',
  },
})
