import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apptigent.com/2021.1.01/openapi.yaml',
  output: './src/apptigent/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apptigent/types.ts' },
  client: { output: './src/apptigent/client.ts', baseUrl: '/' },
  rpc: { output: './src/apptigent/rpc.ts', parseResponse: true },
  swr: { output: './src/apptigent/hooks/swr.ts' },
  'tanstack-query': { output: './src/apptigent/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apptigent/hooks/preact-query.ts' },
  'solid-query': { output: './src/apptigent/hooks/solid-query.ts' },
  'vue-query': { output: './src/apptigent/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apptigent/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apptigent/hooks/angular-query.ts' },
  docs: {
    output: './src/apptigent/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
