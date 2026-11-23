import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/rds/2014-10-31/openapi.yaml',
  output: './src/rds/routes.ts',
  template: {},
  type: { output: './src/rds/types.ts' },
  client: { output: './src/rds/client.ts', baseUrl: '/' },
  rpc: { output: './src/rds/rpc.ts', parseResponse: true },
  swr: { output: './src/rds/hooks/swr.ts' },
  'tanstack-query': { output: './src/rds/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rds/hooks/preact-query.ts' },
  'solid-query': { output: './src/rds/hooks/solid-query.ts' },
  'vue-query': { output: './src/rds/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rds/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rds/hooks/angular-query.ts' },
  docs: {
    output: './src/rds/api.md',
    curl: true,
    baseUrl: 'https://rds.us-east-1.amazonaws.com',
  },
})
