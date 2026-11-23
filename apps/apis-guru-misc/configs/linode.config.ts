import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/linode.com/4.145.0/openapi.yaml',
  output: './src/linode/routes.ts',
  template: {},
  type: { output: './src/linode/types.ts' },
  client: { output: './src/linode/client.ts', baseUrl: '/' },
  rpc: { output: './src/linode/rpc.ts', parseResponse: true },
  swr: { output: './src/linode/hooks/swr.ts' },
  'tanstack-query': { output: './src/linode/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/linode/hooks/preact-query.ts' },
  'solid-query': { output: './src/linode/hooks/solid-query.ts' },
  'vue-query': { output: './src/linode/hooks/vue-query.ts' },
  'svelte-query': { output: './src/linode/hooks/svelte-query.ts' },
  'angular-query': { output: './src/linode/hooks/angular-query.ts' },
  docs: {
    output: './src/linode/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
