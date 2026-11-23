import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/departureboard.io/2.0/openapi.yaml',
  output: './src/departureboard-io/routes.ts',
  template: {},
  type: { output: './src/departureboard-io/types.ts' },
  client: { output: './src/departureboard-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/departureboard-io/rpc.ts', parseResponse: true },
  swr: { output: './src/departureboard-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/departureboard-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/departureboard-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/departureboard-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/departureboard-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/departureboard-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/departureboard-io/hooks/angular-query.ts' },
  docs: {
    output: './src/departureboard-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
