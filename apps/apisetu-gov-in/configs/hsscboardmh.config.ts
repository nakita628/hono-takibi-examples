import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hsscboardmh/3.0.0/openapi.yaml',
  output: './src/hsscboardmh/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hsscboardmh/types.ts' },
  client: { output: './src/hsscboardmh/client.ts', baseUrl: '/' },
  rpc: { output: './src/hsscboardmh/rpc.ts', parseResponse: true },
  swr: { output: './src/hsscboardmh/hooks/swr.ts' },
  'tanstack-query': { output: './src/hsscboardmh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hsscboardmh/hooks/preact-query.ts' },
  'solid-query': { output: './src/hsscboardmh/hooks/solid-query.ts' },
  'vue-query': { output: './src/hsscboardmh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hsscboardmh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hsscboardmh/hooks/angular-query.ts' },
  docs: {
    output: './src/hsscboardmh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
