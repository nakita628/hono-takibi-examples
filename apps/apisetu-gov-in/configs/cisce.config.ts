import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cisce/3.0.0/openapi.yaml',
  output: './src/cisce/routes.ts',
  template: {},
  type: { output: './src/cisce/types.ts' },
  client: { output: './src/cisce/client.ts', baseUrl: '/' },
  rpc: { output: './src/cisce/rpc.ts', parseResponse: true },
  swr: { output: './src/cisce/hooks/swr.ts' },
  'tanstack-query': { output: './src/cisce/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cisce/hooks/preact-query.ts' },
  'solid-query': { output: './src/cisce/hooks/solid-query.ts' },
  'vue-query': { output: './src/cisce/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cisce/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cisce/hooks/angular-query.ts' },
  docs: {
    output: './src/cisce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
