import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/devicefarm/2015-06-23/openapi.yaml',
  output: './src/devicefarm/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/devicefarm/types.ts' },
  client: { output: './src/devicefarm/client.ts', baseUrl: '/' },
  rpc: { output: './src/devicefarm/rpc.ts', parseResponse: true },
  swr: { output: './src/devicefarm/hooks/swr.ts' },
  'tanstack-query': { output: './src/devicefarm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/devicefarm/hooks/preact-query.ts' },
  'solid-query': { output: './src/devicefarm/hooks/solid-query.ts' },
  'vue-query': { output: './src/devicefarm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/devicefarm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/devicefarm/hooks/angular-query.ts' },
  docs: {
    output: './src/devicefarm/api.md',
    curl: true,
    baseUrl: 'https://devicefarm.us-east-1.amazonaws.com',
  },
})
