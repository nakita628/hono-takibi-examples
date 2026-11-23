import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcountrymatch/1.0.0/openapi.yaml',
  output: './src/getcountrymatch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getcountrymatch/types.ts' },
  client: { output: './src/getcountrymatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/getcountrymatch/rpc.ts', parseResponse: true },
  swr: { output: './src/getcountrymatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/getcountrymatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getcountrymatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/getcountrymatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/getcountrymatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getcountrymatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getcountrymatch/hooks/angular-query.ts' },
  docs: {
    output: './src/getcountrymatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
