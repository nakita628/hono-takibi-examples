import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/containeranalysis/v1beta1/openapi.yaml',
  output: './src/containeranalysis/routes.ts',
  template: {},
  type: { output: './src/containeranalysis/types.ts' },
  client: { output: './src/containeranalysis/client.ts', baseUrl: '/' },
  rpc: { output: './src/containeranalysis/rpc.ts', parseResponse: true },
  swr: { output: './src/containeranalysis/hooks/swr.ts' },
  'tanstack-query': { output: './src/containeranalysis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/containeranalysis/hooks/preact-query.ts' },
  'solid-query': { output: './src/containeranalysis/hooks/solid-query.ts' },
  'vue-query': { output: './src/containeranalysis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/containeranalysis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/containeranalysis/hooks/angular-query.ts' },
  docs: {
    output: './src/containeranalysis/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
