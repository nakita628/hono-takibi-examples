import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/enode.io/1.3.10/openapi.yaml',
  output: './src/enode-io/routes.ts',
  template: {},
  type: { output: './src/enode-io/types.ts' },
  client: { output: './src/enode-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/enode-io/rpc.ts', parseResponse: true },
  swr: { output: './src/enode-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/enode-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/enode-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/enode-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/enode-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/enode-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/enode-io/hooks/angular-query.ts' },
  docs: {
    output: './src/enode-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
