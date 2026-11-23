import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exavault.com/2.0/openapi.yaml',
  output: './src/exavault/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/exavault/types.ts' },
  client: { output: './src/exavault/client.ts', baseUrl: '/' },
  rpc: { output: './src/exavault/rpc.ts', parseResponse: true },
  swr: { output: './src/exavault/hooks/swr.ts' },
  'tanstack-query': { output: './src/exavault/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/exavault/hooks/preact-query.ts' },
  'solid-query': { output: './src/exavault/hooks/solid-query.ts' },
  'vue-query': { output: './src/exavault/hooks/vue-query.ts' },
  'svelte-query': { output: './src/exavault/hooks/svelte-query.ts' },
  'angular-query': { output: './src/exavault/hooks/angular-query.ts' },
  docs: {
    output: './src/exavault/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
