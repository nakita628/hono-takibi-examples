import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/greip.io/1.0.0/openapi.yaml',
  output: './src/greip-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/greip-io/types.ts' },
  client: { output: './src/greip-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/greip-io/rpc.ts', parseResponse: true },
  swr: { output: './src/greip-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/greip-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/greip-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/greip-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/greip-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/greip-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/greip-io/hooks/angular-query.ts' },
  docs: {
    output: './src/greip-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
