import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aktu/3.0.0/openapi.yaml',
  output: './src/aktu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/aktu/types.ts' },
  client: { output: './src/aktu/client.ts', baseUrl: '/' },
  rpc: { output: './src/aktu/rpc.ts', parseResponse: true },
  swr: { output: './src/aktu/hooks/swr.ts' },
  'tanstack-query': { output: './src/aktu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aktu/hooks/preact-query.ts' },
  'solid-query': { output: './src/aktu/hooks/solid-query.ts' },
  'vue-query': { output: './src/aktu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aktu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aktu/hooks/angular-query.ts' },
  docs: {
    output: './src/aktu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
