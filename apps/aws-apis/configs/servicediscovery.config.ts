import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/servicediscovery/2017-03-14/openapi.yaml',
  output: './src/servicediscovery/routes.ts',
  template: {},
  type: { output: './src/servicediscovery/types.ts' },
  client: { output: './src/servicediscovery/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicediscovery/rpc.ts', parseResponse: true },
  swr: { output: './src/servicediscovery/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicediscovery/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicediscovery/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicediscovery/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicediscovery/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicediscovery/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicediscovery/hooks/angular-query.ts' },
  docs: {
    output: './src/servicediscovery/api.md',
    curl: true,
    baseUrl: 'https://servicediscovery.us-east-1.amazonaws.com',
  },
})
