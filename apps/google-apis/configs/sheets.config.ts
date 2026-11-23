import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sheets/v4/openapi.yaml',
  output: './src/sheets/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sheets/types.ts' },
  client: { output: './src/sheets/client.ts', baseUrl: '/' },
  rpc: { output: './src/sheets/rpc.ts', parseResponse: true },
  swr: { output: './src/sheets/hooks/swr.ts' },
  'tanstack-query': { output: './src/sheets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sheets/hooks/preact-query.ts' },
  'solid-query': { output: './src/sheets/hooks/solid-query.ts' },
  'vue-query': { output: './src/sheets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sheets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sheets/hooks/angular-query.ts' },
  docs: {
    output: './src/sheets/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
