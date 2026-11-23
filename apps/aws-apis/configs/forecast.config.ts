import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/forecast/2018-06-26/openapi.yaml',
  output: './src/forecast/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/forecast/types.ts' },
  client: { output: './src/forecast/client.ts', baseUrl: '/' },
  rpc: { output: './src/forecast/rpc.ts', parseResponse: true },
  swr: { output: './src/forecast/hooks/swr.ts' },
  'tanstack-query': { output: './src/forecast/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/forecast/hooks/preact-query.ts' },
  'solid-query': { output: './src/forecast/hooks/solid-query.ts' },
  'vue-query': { output: './src/forecast/hooks/vue-query.ts' },
  'svelte-query': { output: './src/forecast/hooks/svelte-query.ts' },
  'angular-query': { output: './src/forecast/hooks/angular-query.ts' },
  docs: {
    output: './src/forecast/api.md',
    curl: true,
    baseUrl: 'https://forecast.us-east-1.amazonaws.com',
  },
})
