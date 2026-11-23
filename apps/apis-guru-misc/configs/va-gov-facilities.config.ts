import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/facilities/0.0.1/openapi.yaml',
  output: './src/va-gov-facilities/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/va-gov-facilities/types.ts' },
  client: { output: './src/va-gov-facilities/client.ts', baseUrl: '/' },
  rpc: { output: './src/va-gov-facilities/rpc.ts', parseResponse: true },
  swr: { output: './src/va-gov-facilities/hooks/swr.ts' },
  'tanstack-query': { output: './src/va-gov-facilities/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/va-gov-facilities/hooks/preact-query.ts' },
  'solid-query': { output: './src/va-gov-facilities/hooks/solid-query.ts' },
  'vue-query': { output: './src/va-gov-facilities/hooks/vue-query.ts' },
  'svelte-query': { output: './src/va-gov-facilities/hooks/svelte-query.ts' },
  'angular-query': { output: './src/va-gov-facilities/hooks/angular-query.ts' },
  docs: {
    output: './src/va-gov-facilities/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
