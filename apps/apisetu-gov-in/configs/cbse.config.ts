import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cbse/3.0.0/openapi.yaml',
  output: './src/cbse/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cbse/types.ts' },
  client: { output: './src/cbse/client.ts', baseUrl: '/' },
  rpc: { output: './src/cbse/rpc.ts', parseResponse: true },
  swr: { output: './src/cbse/hooks/swr.ts' },
  'tanstack-query': { output: './src/cbse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cbse/hooks/preact-query.ts' },
  'solid-query': { output: './src/cbse/hooks/solid-query.ts' },
  'vue-query': { output: './src/cbse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cbse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cbse/hooks/angular-query.ts' },
  docs: {
    output: './src/cbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
