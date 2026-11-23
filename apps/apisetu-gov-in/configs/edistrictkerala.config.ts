import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictkerala/3.0.0/openapi.yaml',
  output: './src/edistrictkerala/routes.ts',
  template: {},
  type: { output: './src/edistrictkerala/types.ts' },
  client: { output: './src/edistrictkerala/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistrictkerala/rpc.ts', parseResponse: true },
  swr: { output: './src/edistrictkerala/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistrictkerala/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistrictkerala/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistrictkerala/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistrictkerala/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistrictkerala/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistrictkerala/hooks/angular-query.ts' },
  docs: {
    output: './src/edistrictkerala/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
