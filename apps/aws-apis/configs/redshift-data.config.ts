import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/redshift-data/2019-12-20/openapi.yaml',
  output: './src/redshift-data/routes.ts',
  template: {},
  type: { output: './src/redshift-data/types.ts' },
  client: { output: './src/redshift-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/redshift-data/rpc.ts', parseResponse: true },
  swr: { output: './src/redshift-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/redshift-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redshift-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/redshift-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/redshift-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redshift-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redshift-data/hooks/angular-query.ts' },
  docs: {
    output: './src/redshift-data/api.md',
    curl: true,
    baseUrl: 'https://redshift-data.us-east-1.amazonaws.com',
  },
})
