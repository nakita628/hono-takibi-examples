import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotfleethub/2020-11-03/openapi.yaml',
  output: './src/iotfleethub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iotfleethub/types.ts' },
  client: { output: './src/iotfleethub/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotfleethub/rpc.ts', parseResponse: true },
  swr: { output: './src/iotfleethub/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotfleethub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotfleethub/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotfleethub/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotfleethub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotfleethub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotfleethub/hooks/angular-query.ts' },
  docs: {
    output: './src/iotfleethub/api.md',
    curl: true,
    baseUrl: 'https://iotfleethub.us-east-1.amazonaws.com',
  },
})
