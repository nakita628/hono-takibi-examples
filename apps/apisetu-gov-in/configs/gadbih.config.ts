import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gadbih/3.0.0/openapi.yaml',
  output: './src/gadbih/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gadbih/types.ts' },
  client: { output: './src/gadbih/client.ts', baseUrl: '/' },
  rpc: { output: './src/gadbih/rpc.ts', parseResponse: true },
  swr: { output: './src/gadbih/hooks/swr.ts' },
  'tanstack-query': { output: './src/gadbih/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gadbih/hooks/preact-query.ts' },
  'solid-query': { output: './src/gadbih/hooks/solid-query.ts' },
  'vue-query': { output: './src/gadbih/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gadbih/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gadbih/hooks/angular-query.ts' },
  docs: {
    output: './src/gadbih/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
