import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/patrowl.local/1.0.0/openapi.yaml',
  output: './src/patrowl/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/patrowl/types.ts' },
  client: { output: './src/patrowl/client.ts', baseUrl: '/' },
  rpc: { output: './src/patrowl/rpc.ts', parseResponse: true },
  swr: { output: './src/patrowl/hooks/swr.ts' },
  'tanstack-query': { output: './src/patrowl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/patrowl/hooks/preact-query.ts' },
  'solid-query': { output: './src/patrowl/hooks/solid-query.ts' },
  'vue-query': { output: './src/patrowl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/patrowl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/patrowl/hooks/angular-query.ts' },
  docs: {
    output: './src/patrowl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
