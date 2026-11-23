import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/vhseker/3.0.0/openapi.yaml',
  output: './src/vhseker/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vhseker/types.ts' },
  client: { output: './src/vhseker/client.ts', baseUrl: '/' },
  rpc: { output: './src/vhseker/rpc.ts', parseResponse: true },
  swr: { output: './src/vhseker/hooks/swr.ts' },
  'tanstack-query': { output: './src/vhseker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vhseker/hooks/preact-query.ts' },
  'solid-query': { output: './src/vhseker/hooks/solid-query.ts' },
  'vue-query': { output: './src/vhseker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vhseker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vhseker/hooks/angular-query.ts' },
  docs: {
    output: './src/vhseker/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
