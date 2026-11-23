import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/shoppingcontent/v2/openapi.yaml',
  output: './src/shoppingcontent/routes.ts',
  template: {},
  type: { output: './src/shoppingcontent/types.ts' },
  client: { output: './src/shoppingcontent/client.ts', baseUrl: '/' },
  rpc: { output: './src/shoppingcontent/rpc.ts', parseResponse: true },
  swr: { output: './src/shoppingcontent/hooks/swr.ts' },
  'tanstack-query': { output: './src/shoppingcontent/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shoppingcontent/hooks/preact-query.ts' },
  'solid-query': { output: './src/shoppingcontent/hooks/solid-query.ts' },
  'vue-query': { output: './src/shoppingcontent/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shoppingcontent/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shoppingcontent/hooks/angular-query.ts' },
  docs: {
    output: './src/shoppingcontent/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
