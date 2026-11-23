import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/opendatanetwork.com/1.0.0/openapi.yaml',
  output: './src/opendatanetwork/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/opendatanetwork/types.ts' },
  client: { output: './src/opendatanetwork/client.ts', baseUrl: '/' },
  rpc: { output: './src/opendatanetwork/rpc.ts', parseResponse: true },
  swr: { output: './src/opendatanetwork/hooks/swr.ts' },
  'tanstack-query': { output: './src/opendatanetwork/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/opendatanetwork/hooks/preact-query.ts' },
  'solid-query': { output: './src/opendatanetwork/hooks/solid-query.ts' },
  'vue-query': { output: './src/opendatanetwork/hooks/vue-query.ts' },
  'svelte-query': { output: './src/opendatanetwork/hooks/svelte-query.ts' },
  'angular-query': { output: './src/opendatanetwork/hooks/angular-query.ts' },
  docs: {
    output: './src/opendatanetwork/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
