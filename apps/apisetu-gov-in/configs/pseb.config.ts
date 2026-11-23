import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pseb/3.0.0/openapi.yaml',
  output: './src/pseb/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pseb/types.ts' },
  client: { output: './src/pseb/client.ts', baseUrl: '/' },
  rpc: { output: './src/pseb/rpc.ts', parseResponse: true },
  swr: { output: './src/pseb/hooks/swr.ts' },
  'tanstack-query': { output: './src/pseb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pseb/hooks/preact-query.ts' },
  'solid-query': { output: './src/pseb/hooks/solid-query.ts' },
  'vue-query': { output: './src/pseb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pseb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pseb/hooks/angular-query.ts' },
  docs: {
    output: './src/pseb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
