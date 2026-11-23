import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/globalaccelerator/2018-08-08/openapi.yaml',
  output: './src/globalaccelerator/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/globalaccelerator/types.ts' },
  client: { output: './src/globalaccelerator/client.ts', baseUrl: '/' },
  rpc: { output: './src/globalaccelerator/rpc.ts', parseResponse: true },
  swr: { output: './src/globalaccelerator/hooks/swr.ts' },
  'tanstack-query': { output: './src/globalaccelerator/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/globalaccelerator/hooks/preact-query.ts' },
  'solid-query': { output: './src/globalaccelerator/hooks/solid-query.ts' },
  'vue-query': { output: './src/globalaccelerator/hooks/vue-query.ts' },
  'svelte-query': { output: './src/globalaccelerator/hooks/svelte-query.ts' },
  'angular-query': { output: './src/globalaccelerator/hooks/angular-query.ts' },
  docs: {
    output: './src/globalaccelerator/api.md',
    curl: true,
    baseUrl: 'https://globalaccelerator.us-east-1.amazonaws.com',
  },
})
