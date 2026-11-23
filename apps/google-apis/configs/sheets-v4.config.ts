import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/sheets/v4/openapi.yaml',
  output: './src/sheets-v4/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sheets-v4/types.ts' },
  client: { output: './src/sheets-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/sheets-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/sheets-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/sheets-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sheets-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/sheets-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/sheets-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sheets-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sheets-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/sheets-v4/api.md',
    curl: true,
    baseUrl: 'https://sheets.googleapis.com',
  },
})
