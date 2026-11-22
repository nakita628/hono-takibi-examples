import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nsidc.org/1.0.0/openapi.yaml',
  output: './src/nsidc-org/routes.ts',
  template: {},
  type: { output: './src/nsidc-org/types.ts' },
  client: { output: './src/nsidc-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/nsidc-org/rpc.ts', parseResponse: true },
  swr: { output: './src/nsidc-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/nsidc-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nsidc-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/nsidc-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/nsidc-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nsidc-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nsidc-org/hooks/angular-query.ts' },
  docs: {
    output: './src/nsidc-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
