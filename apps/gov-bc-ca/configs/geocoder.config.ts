import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/geocoder/2.0.0/openapi.yaml',
  output: './src/geocoder/routes.ts',
  template: {},
  type: { output: './src/geocoder/types.ts' },
  client: { output: './src/geocoder/client.ts', baseUrl: '/' },
  rpc: { output: './src/geocoder/rpc.ts', parseResponse: true },
  swr: { output: './src/geocoder/hooks/swr.ts' },
  'tanstack-query': { output: './src/geocoder/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/geocoder/hooks/preact-query.ts' },
  'solid-query': { output: './src/geocoder/hooks/solid-query.ts' },
  'vue-query': { output: './src/geocoder/hooks/vue-query.ts' },
  'svelte-query': { output: './src/geocoder/hooks/svelte-query.ts' },
  'angular-query': { output: './src/geocoder/hooks/angular-query.ts' },
  docs: {
    output: './src/geocoder/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
