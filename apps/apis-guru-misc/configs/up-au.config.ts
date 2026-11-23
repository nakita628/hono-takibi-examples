import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/up.com.au/v1/openapi.yaml',
  output: './src/up-au/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/up-au/types.ts' },
  client: { output: './src/up-au/client.ts', baseUrl: '/' },
  rpc: { output: './src/up-au/rpc.ts', parseResponse: true },
  swr: { output: './src/up-au/hooks/swr.ts' },
  'tanstack-query': { output: './src/up-au/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/up-au/hooks/preact-query.ts' },
  'solid-query': { output: './src/up-au/hooks/solid-query.ts' },
  'vue-query': { output: './src/up-au/hooks/vue-query.ts' },
  'svelte-query': { output: './src/up-au/hooks/svelte-query.ts' },
  'angular-query': { output: './src/up-au/hooks/angular-query.ts' },
  docs: {
    output: './src/up-au/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
