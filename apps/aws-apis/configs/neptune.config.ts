import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/neptune/2014-10-31/openapi.yaml',
  output: './src/neptune/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/neptune/types.ts' },
  client: { output: './src/neptune/client.ts', baseUrl: '/' },
  rpc: { output: './src/neptune/rpc.ts', parseResponse: true },
  swr: { output: './src/neptune/hooks/swr.ts' },
  'tanstack-query': { output: './src/neptune/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/neptune/hooks/preact-query.ts' },
  'solid-query': { output: './src/neptune/hooks/solid-query.ts' },
  'vue-query': { output: './src/neptune/hooks/vue-query.ts' },
  'svelte-query': { output: './src/neptune/hooks/svelte-query.ts' },
  'angular-query': { output: './src/neptune/hooks/angular-query.ts' },
  docs: {
    output: './src/neptune/api.md',
    curl: true,
    baseUrl: 'https://neptune.us-east-1.amazonaws.com',
  },
})
