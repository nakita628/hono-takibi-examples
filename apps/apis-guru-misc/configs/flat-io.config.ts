import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/flat.io/2.13.0/openapi.yaml',
  output: './src/flat-io/routes.ts',
  template: {},
  type: { output: './src/flat-io/types.ts' },
  client: { output: './src/flat-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/flat-io/rpc.ts', parseResponse: true },
  swr: { output: './src/flat-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/flat-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/flat-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/flat-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/flat-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/flat-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/flat-io/hooks/angular-query.ts' },
  docs: {
    output: './src/flat-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
