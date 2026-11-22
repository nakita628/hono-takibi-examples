import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/redshift/2012-12-01/openapi.yaml',
  output: './src/redshift/routes.ts',
  template: {},
  type: { output: './src/redshift/types.ts' },
  client: { output: './src/redshift/client.ts', baseUrl: '/' },
  rpc: { output: './src/redshift/rpc.ts', parseResponse: true },
  swr: { output: './src/redshift/hooks/swr.ts' },
  'tanstack-query': { output: './src/redshift/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redshift/hooks/preact-query.ts' },
  'solid-query': { output: './src/redshift/hooks/solid-query.ts' },
  'vue-query': { output: './src/redshift/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redshift/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redshift/hooks/angular-query.ts' },
  docs: {
    output: './src/redshift/api.md',
    curl: true,
    baseUrl: 'https://redshift.us-east-1.amazonaws.com',
  },
})
