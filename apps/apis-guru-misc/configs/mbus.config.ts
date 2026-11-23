import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mbus.local/0.3.5/openapi.yaml',
  output: './src/mbus/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mbus/types.ts' },
  client: { output: './src/mbus/client.ts', baseUrl: '/' },
  rpc: { output: './src/mbus/rpc.ts', parseResponse: true },
  swr: { output: './src/mbus/hooks/swr.ts' },
  'tanstack-query': { output: './src/mbus/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mbus/hooks/preact-query.ts' },
  'solid-query': { output: './src/mbus/hooks/solid-query.ts' },
  'vue-query': { output: './src/mbus/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mbus/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mbus/hooks/angular-query.ts' },
  docs: {
    output: './src/mbus/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
