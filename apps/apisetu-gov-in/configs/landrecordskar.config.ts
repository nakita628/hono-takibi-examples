import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/landrecordskar/3.0.0/openapi.yaml',
  output: './src/landrecordskar/routes.ts',
  template: {},
  type: { output: './src/landrecordskar/types.ts' },
  client: { output: './src/landrecordskar/client.ts', baseUrl: '/' },
  rpc: { output: './src/landrecordskar/rpc.ts', parseResponse: true },
  swr: { output: './src/landrecordskar/hooks/swr.ts' },
  'tanstack-query': { output: './src/landrecordskar/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/landrecordskar/hooks/preact-query.ts' },
  'solid-query': { output: './src/landrecordskar/hooks/solid-query.ts' },
  'vue-query': { output: './src/landrecordskar/hooks/vue-query.ts' },
  'svelte-query': { output: './src/landrecordskar/hooks/svelte-query.ts' },
  'angular-query': { output: './src/landrecordskar/hooks/angular-query.ts' },
  docs: {
    output: './src/landrecordskar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
