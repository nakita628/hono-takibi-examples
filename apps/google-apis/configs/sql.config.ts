import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sql/v1beta4/openapi.yaml',
  output: './src/sql/routes.ts',
  template: {},
  type: { output: './src/sql/types.ts' },
  client: { output: './src/sql/client.ts', baseUrl: '/' },
  rpc: { output: './src/sql/rpc.ts', parseResponse: true },
  swr: { output: './src/sql/hooks/swr.ts' },
  'tanstack-query': { output: './src/sql/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sql/hooks/preact-query.ts' },
  'solid-query': { output: './src/sql/hooks/solid-query.ts' },
  'vue-query': { output: './src/sql/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sql/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sql/hooks/angular-query.ts' },
  docs: {
    output: './src/sql/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
