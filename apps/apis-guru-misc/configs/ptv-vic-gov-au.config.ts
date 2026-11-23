import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ptv.vic.gov.au/v3/openapi.yaml',
  output: './src/ptv-vic-gov-au/routes.ts',
  template: {},
  type: { output: './src/ptv-vic-gov-au/types.ts' },
  client: { output: './src/ptv-vic-gov-au/client.ts', baseUrl: '/' },
  rpc: { output: './src/ptv-vic-gov-au/rpc.ts', parseResponse: true },
  swr: { output: './src/ptv-vic-gov-au/hooks/swr.ts' },
  'tanstack-query': { output: './src/ptv-vic-gov-au/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ptv-vic-gov-au/hooks/preact-query.ts' },
  'solid-query': { output: './src/ptv-vic-gov-au/hooks/solid-query.ts' },
  'vue-query': { output: './src/ptv-vic-gov-au/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ptv-vic-gov-au/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ptv-vic-gov-au/hooks/angular-query.ts' },
  docs: {
    output: './src/ptv-vic-gov-au/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
