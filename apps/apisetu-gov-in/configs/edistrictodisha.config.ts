import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictodisha/3.0.0/openapi.yaml',
  output: './src/edistrictodisha/routes.ts',
  template: {},
  type: { output: './src/edistrictodisha/types.ts' },
  client: { output: './src/edistrictodisha/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistrictodisha/rpc.ts', parseResponse: true },
  swr: { output: './src/edistrictodisha/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistrictodisha/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistrictodisha/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistrictodisha/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistrictodisha/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistrictodisha/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistrictodisha/hooks/angular-query.ts' },
  docs: {
    output: './src/edistrictodisha/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
