import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datamigration/v1beta1/openapi.yaml',
  output: './src/datamigration/routes.ts',
  template: {},
  type: { output: './src/datamigration/types.ts' },
  client: { output: './src/datamigration/client.ts', baseUrl: '/' },
  rpc: { output: './src/datamigration/rpc.ts', parseResponse: true },
  swr: { output: './src/datamigration/hooks/swr.ts' },
  'tanstack-query': { output: './src/datamigration/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datamigration/hooks/preact-query.ts' },
  'solid-query': { output: './src/datamigration/hooks/solid-query.ts' },
  'vue-query': { output: './src/datamigration/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datamigration/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datamigration/hooks/angular-query.ts' },
  docs: {
    output: './src/datamigration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
