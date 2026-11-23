import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/scvtup/3.0.0/openapi.yaml',
  output: './src/scvtup/routes.ts',
  template: {},
  type: { output: './src/scvtup/types.ts' },
  client: { output: './src/scvtup/client.ts', baseUrl: '/' },
  rpc: { output: './src/scvtup/rpc.ts', parseResponse: true },
  swr: { output: './src/scvtup/hooks/swr.ts' },
  'tanstack-query': { output: './src/scvtup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/scvtup/hooks/preact-query.ts' },
  'solid-query': { output: './src/scvtup/hooks/solid-query.ts' },
  'vue-query': { output: './src/scvtup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/scvtup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/scvtup/hooks/angular-query.ts' },
  docs: {
    output: './src/scvtup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
