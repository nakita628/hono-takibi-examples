import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tl-api.azurewebsites.net/2020-08-10_6-22/openapi.yaml',
  output: './src/tl-api-azurewebsites-net/routes.ts',
  template: {},
  type: { output: './src/tl-api-azurewebsites-net/types.ts' },
  client: { output: './src/tl-api-azurewebsites-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/tl-api-azurewebsites-net/rpc.ts', parseResponse: true },
  swr: { output: './src/tl-api-azurewebsites-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/tl-api-azurewebsites-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tl-api-azurewebsites-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/tl-api-azurewebsites-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/tl-api-azurewebsites-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tl-api-azurewebsites-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tl-api-azurewebsites-net/hooks/angular-query.ts' },
  docs: {
    output: './src/tl-api-azurewebsites-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
