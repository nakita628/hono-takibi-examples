import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2location.io/1.0/openapi.yaml',
  output: './src/ip2location-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ip2location-io/types.ts' },
  client: { output: './src/ip2location-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/ip2location-io/rpc.ts', parseResponse: true },
  swr: { output: './src/ip2location-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/ip2location-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ip2location-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/ip2location-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/ip2location-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ip2location-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ip2location-io/hooks/angular-query.ts' },
  docs: {
    output: './src/ip2location-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
