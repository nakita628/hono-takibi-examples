import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/noosh.com/1.0/openapi.yaml',
  output: './src/noosh/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/noosh/types.ts' },
  client: { output: './src/noosh/client.ts', baseUrl: '/' },
  rpc: { output: './src/noosh/rpc.ts', parseResponse: true },
  swr: { output: './src/noosh/hooks/swr.ts' },
  'tanstack-query': { output: './src/noosh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/noosh/hooks/preact-query.ts' },
  'solid-query': { output: './src/noosh/hooks/solid-query.ts' },
  'vue-query': { output: './src/noosh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/noosh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/noosh/hooks/angular-query.ts' },
  docs: {
    output: './src/noosh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
