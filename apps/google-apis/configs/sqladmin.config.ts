import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/sqladmin/v1/openapi.yaml',
  output: './src/sqladmin/routes.ts',
  template: {},
  type: { output: './src/sqladmin/types.ts' },
  client: { output: './src/sqladmin/client.ts', baseUrl: '/' },
  rpc: { output: './src/sqladmin/rpc.ts', parseResponse: true },
  swr: { output: './src/sqladmin/hooks/swr.ts' },
  'tanstack-query': { output: './src/sqladmin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sqladmin/hooks/preact-query.ts' },
  'solid-query': { output: './src/sqladmin/hooks/solid-query.ts' },
  'vue-query': { output: './src/sqladmin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sqladmin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sqladmin/hooks/angular-query.ts' },
  docs: {
    output: './src/sqladmin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
