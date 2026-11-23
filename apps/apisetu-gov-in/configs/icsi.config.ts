import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/icsi/3.0.0/openapi.yaml',
  output: './src/icsi/routes.ts',
  template: {},
  type: { output: './src/icsi/types.ts' },
  client: { output: './src/icsi/client.ts', baseUrl: '/' },
  rpc: { output: './src/icsi/rpc.ts', parseResponse: true },
  swr: { output: './src/icsi/hooks/swr.ts' },
  'tanstack-query': { output: './src/icsi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/icsi/hooks/preact-query.ts' },
  'solid-query': { output: './src/icsi/hooks/solid-query.ts' },
  'vue-query': { output: './src/icsi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/icsi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/icsi/hooks/angular-query.ts' },
  docs: {
    output: './src/icsi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
