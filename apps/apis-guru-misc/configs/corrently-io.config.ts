import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/corrently.io/2.0.0/openapi.yaml',
  output: './src/corrently-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/corrently-io/types.ts' },
  client: { output: './src/corrently-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/corrently-io/rpc.ts', parseResponse: true },
  swr: { output: './src/corrently-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/corrently-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/corrently-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/corrently-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/corrently-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/corrently-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/corrently-io/hooks/angular-query.ts' },
  docs: {
    output: './src/corrently-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
