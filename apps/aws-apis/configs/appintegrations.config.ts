import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appintegrations/2020-07-29/openapi.yaml',
  output: './src/appintegrations/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/appintegrations/types.ts' },
  client: { output: './src/appintegrations/client.ts', baseUrl: '/' },
  rpc: { output: './src/appintegrations/rpc.ts', parseResponse: true },
  swr: { output: './src/appintegrations/hooks/swr.ts' },
  'tanstack-query': { output: './src/appintegrations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appintegrations/hooks/preact-query.ts' },
  'solid-query': { output: './src/appintegrations/hooks/solid-query.ts' },
  'vue-query': { output: './src/appintegrations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appintegrations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appintegrations/hooks/angular-query.ts' },
  docs: {
    output: './src/appintegrations/api.md',
    curl: true,
    baseUrl: 'https://appintegrations.us-east-1.amazonaws.com',
  },
})
