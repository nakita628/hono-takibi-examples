import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exude-api.herokuapp.com/1.0.0/openapi.yaml',
  output: './src/exude-api-herokuapp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/exude-api-herokuapp/types.ts' },
  client: { output: './src/exude-api-herokuapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/exude-api-herokuapp/rpc.ts', parseResponse: true },
  swr: { output: './src/exude-api-herokuapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/exude-api-herokuapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/exude-api-herokuapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/exude-api-herokuapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/exude-api-herokuapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/exude-api-herokuapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/exude-api-herokuapp/hooks/angular-query.ts' },
  docs: {
    output: './src/exude-api-herokuapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
