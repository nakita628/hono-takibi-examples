import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/rds-data/2018-08-01/openapi.yaml',
  output: './src/rds-data/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/rds-data/types.ts' },
  client: { output: './src/rds-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/rds-data/rpc.ts', parseResponse: true },
  swr: { output: './src/rds-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/rds-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rds-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/rds-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/rds-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rds-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rds-data/hooks/angular-query.ts' },
  docs: {
    output: './src/rds-data/api.md',
    curl: true,
    baseUrl: 'https://rds-data.us-east-1.amazonaws.com',
  },
})
