import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ideaconsult.net/enanomapper/4.0.0/openapi.yaml',
  output: './src/ideaconsult-net-enanomapper/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ideaconsult-net-enanomapper/types.ts' },
  client: { output: './src/ideaconsult-net-enanomapper/client.ts', baseUrl: '/' },
  rpc: { output: './src/ideaconsult-net-enanomapper/rpc.ts', parseResponse: true },
  swr: { output: './src/ideaconsult-net-enanomapper/hooks/swr.ts' },
  'tanstack-query': { output: './src/ideaconsult-net-enanomapper/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ideaconsult-net-enanomapper/hooks/preact-query.ts' },
  'solid-query': { output: './src/ideaconsult-net-enanomapper/hooks/solid-query.ts' },
  'vue-query': { output: './src/ideaconsult-net-enanomapper/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ideaconsult-net-enanomapper/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ideaconsult-net-enanomapper/hooks/angular-query.ts' },
  docs: {
    output: './src/ideaconsult-net-enanomapper/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
