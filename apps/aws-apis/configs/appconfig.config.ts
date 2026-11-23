import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appconfig/2019-10-09/openapi.yaml',
  output: './src/appconfig/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/appconfig/types.ts' },
  client: { output: './src/appconfig/client.ts', baseUrl: '/' },
  rpc: { output: './src/appconfig/rpc.ts', parseResponse: true },
  swr: { output: './src/appconfig/hooks/swr.ts' },
  'tanstack-query': { output: './src/appconfig/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appconfig/hooks/preact-query.ts' },
  'solid-query': { output: './src/appconfig/hooks/solid-query.ts' },
  'vue-query': { output: './src/appconfig/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appconfig/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appconfig/hooks/angular-query.ts' },
  docs: {
    output: './src/appconfig/api.md',
    curl: true,
    baseUrl: 'https://appconfig.us-east-1.amazonaws.com',
  },
})
