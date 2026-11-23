import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bikewise.org/v2/openapi.yaml',
  output: './src/bikewise-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bikewise-org/types.ts' },
  client: { output: './src/bikewise-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/bikewise-org/rpc.ts', parseResponse: true },
  swr: { output: './src/bikewise-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/bikewise-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bikewise-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/bikewise-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/bikewise-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bikewise-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bikewise-org/hooks/angular-query.ts' },
  docs: {
    output: './src/bikewise-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
