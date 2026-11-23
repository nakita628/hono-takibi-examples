import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/abusiveexperiencereport/v1/openapi.yaml',
  output: './src/abusiveexperiencereport/routes.ts',
  template: {},
  type: { output: './src/abusiveexperiencereport/types.ts' },
  client: { output: './src/abusiveexperiencereport/client.ts', baseUrl: '/' },
  rpc: { output: './src/abusiveexperiencereport/rpc.ts', parseResponse: true },
  swr: { output: './src/abusiveexperiencereport/hooks/swr.ts' },
  'tanstack-query': { output: './src/abusiveexperiencereport/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/abusiveexperiencereport/hooks/preact-query.ts' },
  'solid-query': { output: './src/abusiveexperiencereport/hooks/solid-query.ts' },
  'vue-query': { output: './src/abusiveexperiencereport/hooks/vue-query.ts' },
  'svelte-query': { output: './src/abusiveexperiencereport/hooks/svelte-query.ts' },
  'angular-query': { output: './src/abusiveexperiencereport/hooks/angular-query.ts' },
  docs: {
    output: './src/abusiveexperiencereport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
