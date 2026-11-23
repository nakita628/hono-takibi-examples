import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/hhs.gov/2/openapi.yaml',
  output: './src/hhs-gov/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hhs-gov/types.ts' },
  client: { output: './src/hhs-gov/client.ts', baseUrl: '/' },
  rpc: { output: './src/hhs-gov/rpc.ts', parseResponse: true },
  swr: { output: './src/hhs-gov/hooks/swr.ts' },
  'tanstack-query': { output: './src/hhs-gov/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hhs-gov/hooks/preact-query.ts' },
  'solid-query': { output: './src/hhs-gov/hooks/solid-query.ts' },
  'vue-query': { output: './src/hhs-gov/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hhs-gov/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hhs-gov/hooks/angular-query.ts' },
  docs: {
    output: './src/hhs-gov/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
