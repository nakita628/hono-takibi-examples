import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/beezup.com/2.0/openapi.yaml',
  output: './src/beezup/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/beezup/types.ts' },
  client: { output: './src/beezup/client.ts', baseUrl: '/' },
  rpc: { output: './src/beezup/rpc.ts', parseResponse: true },
  swr: { output: './src/beezup/hooks/swr.ts' },
  'tanstack-query': { output: './src/beezup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/beezup/hooks/preact-query.ts' },
  'solid-query': { output: './src/beezup/hooks/solid-query.ts' },
  'vue-query': { output: './src/beezup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/beezup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/beezup/hooks/angular-query.ts' },
  docs: {
    output: './src/beezup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
