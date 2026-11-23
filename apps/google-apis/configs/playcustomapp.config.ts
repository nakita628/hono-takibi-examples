import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playcustomapp/v1/openapi.yaml',
  output: './src/playcustomapp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/playcustomapp/types.ts' },
  client: { output: './src/playcustomapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/playcustomapp/rpc.ts', parseResponse: true },
  swr: { output: './src/playcustomapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/playcustomapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/playcustomapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/playcustomapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/playcustomapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/playcustomapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/playcustomapp/hooks/angular-query.ts' },
  docs: {
    output: './src/playcustomapp/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
