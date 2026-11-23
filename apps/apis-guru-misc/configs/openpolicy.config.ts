import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openpolicy.local/0.28.0/openapi.yaml',
  output: './src/openpolicy/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openpolicy/types.ts' },
  client: { output: './src/openpolicy/client.ts', baseUrl: '/' },
  rpc: { output: './src/openpolicy/rpc.ts', parseResponse: true },
  swr: { output: './src/openpolicy/hooks/swr.ts' },
  'tanstack-query': { output: './src/openpolicy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openpolicy/hooks/preact-query.ts' },
  'solid-query': { output: './src/openpolicy/hooks/solid-query.ts' },
  'vue-query': { output: './src/openpolicy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openpolicy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openpolicy/hooks/angular-query.ts' },
  docs: {
    output: './src/openpolicy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
