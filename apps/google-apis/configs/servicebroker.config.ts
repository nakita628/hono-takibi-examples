import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicebroker/v1beta1/openapi.yaml',
  output: './src/servicebroker/routes.ts',
  template: {},
  type: { output: './src/servicebroker/types.ts' },
  client: { output: './src/servicebroker/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicebroker/rpc.ts', parseResponse: true },
  swr: { output: './src/servicebroker/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicebroker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicebroker/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicebroker/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicebroker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicebroker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicebroker/hooks/angular-query.ts' },
  docs: {
    output: './src/servicebroker/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
