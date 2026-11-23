import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/municipaladmin/3.0.0/openapi.yaml',
  output: './src/municipaladmin/routes.ts',
  template: {},
  type: { output: './src/municipaladmin/types.ts' },
  client: { output: './src/municipaladmin/client.ts', baseUrl: '/' },
  rpc: { output: './src/municipaladmin/rpc.ts', parseResponse: true },
  swr: { output: './src/municipaladmin/hooks/swr.ts' },
  'tanstack-query': { output: './src/municipaladmin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/municipaladmin/hooks/preact-query.ts' },
  'solid-query': { output: './src/municipaladmin/hooks/solid-query.ts' },
  'vue-query': { output: './src/municipaladmin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/municipaladmin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/municipaladmin/hooks/angular-query.ts' },
  docs: {
    output: './src/municipaladmin/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
