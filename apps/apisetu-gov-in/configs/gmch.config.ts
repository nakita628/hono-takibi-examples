import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gmch/3.0.0/openapi.yaml',
  output: './src/gmch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gmch/types.ts' },
  client: { output: './src/gmch/client.ts', baseUrl: '/' },
  rpc: { output: './src/gmch/rpc.ts', parseResponse: true },
  swr: { output: './src/gmch/hooks/swr.ts' },
  'tanstack-query': { output: './src/gmch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gmch/hooks/preact-query.ts' },
  'solid-query': { output: './src/gmch/hooks/solid-query.ts' },
  'vue-query': { output: './src/gmch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gmch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gmch/hooks/angular-query.ts' },
  docs: {
    output: './src/gmch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
