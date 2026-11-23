import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot/2015-05-28/openapi.yaml',
  output: './src/iot/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iot/types.ts' },
  client: { output: './src/iot/client.ts', baseUrl: '/' },
  rpc: { output: './src/iot/rpc.ts', parseResponse: true },
  swr: { output: './src/iot/hooks/swr.ts' },
  'tanstack-query': { output: './src/iot/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iot/hooks/preact-query.ts' },
  'solid-query': { output: './src/iot/hooks/solid-query.ts' },
  'vue-query': { output: './src/iot/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iot/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iot/hooks/angular-query.ts' },
  docs: {
    output: './src/iot/api.md',
    curl: true,
    baseUrl: 'https://iot.us-east-1.amazonaws.com',
  },
})
