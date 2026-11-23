import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mizorampolice/3.0.0/openapi.yaml',
  output: './src/mizorampolice/routes.ts',
  template: {},
  type: { output: './src/mizorampolice/types.ts' },
  client: { output: './src/mizorampolice/client.ts', baseUrl: '/' },
  rpc: { output: './src/mizorampolice/rpc.ts', parseResponse: true },
  swr: { output: './src/mizorampolice/hooks/swr.ts' },
  'tanstack-query': { output: './src/mizorampolice/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mizorampolice/hooks/preact-query.ts' },
  'solid-query': { output: './src/mizorampolice/hooks/solid-query.ts' },
  'vue-query': { output: './src/mizorampolice/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mizorampolice/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mizorampolice/hooks/angular-query.ts' },
  docs: {
    output: './src/mizorampolice/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
