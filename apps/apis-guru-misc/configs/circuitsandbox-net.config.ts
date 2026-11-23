import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/circuitsandbox.net/2.9.235/openapi.yaml',
  output: './src/circuitsandbox-net/routes.ts',
  template: {},
  type: { output: './src/circuitsandbox-net/types.ts' },
  client: { output: './src/circuitsandbox-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/circuitsandbox-net/rpc.ts', parseResponse: true },
  swr: { output: './src/circuitsandbox-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/circuitsandbox-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/circuitsandbox-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/circuitsandbox-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/circuitsandbox-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/circuitsandbox-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/circuitsandbox-net/hooks/angular-query.ts' },
  docs: {
    output: './src/circuitsandbox-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
