import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/spanner/v1/openapi.yaml',
  output: './src/spanner/routes.ts',
  template: {},
  type: { output: './src/spanner/types.ts' },
  client: { output: './src/spanner/client.ts', baseUrl: '/' },
  rpc: { output: './src/spanner/rpc.ts', parseResponse: true },
  swr: { output: './src/spanner/hooks/swr.ts' },
  'tanstack-query': { output: './src/spanner/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/spanner/hooks/preact-query.ts' },
  'solid-query': { output: './src/spanner/hooks/solid-query.ts' },
  'vue-query': { output: './src/spanner/hooks/vue-query.ts' },
  'svelte-query': { output: './src/spanner/hooks/svelte-query.ts' },
  'angular-query': { output: './src/spanner/hooks/angular-query.ts' },
  docs: {
    output: './src/spanner/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
