import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigtableadmin/v2/openapi.yaml',
  output: './src/bigtableadmin/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bigtableadmin/types.ts' },
  client: { output: './src/bigtableadmin/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigtableadmin/rpc.ts', parseResponse: true },
  swr: { output: './src/bigtableadmin/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigtableadmin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigtableadmin/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigtableadmin/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigtableadmin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigtableadmin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigtableadmin/hooks/angular-query.ts' },
  docs: {
    output: './src/bigtableadmin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
