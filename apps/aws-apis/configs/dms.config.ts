import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dms/2016-01-01/openapi.yaml',
  output: './src/dms/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dms/types.ts' },
  client: { output: './src/dms/client.ts', baseUrl: '/' },
  rpc: { output: './src/dms/rpc.ts', parseResponse: true },
  swr: { output: './src/dms/hooks/swr.ts' },
  'tanstack-query': { output: './src/dms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dms/hooks/preact-query.ts' },
  'solid-query': { output: './src/dms/hooks/solid-query.ts' },
  'vue-query': { output: './src/dms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dms/hooks/angular-query.ts' },
  docs: {
    output: './src/dms/api.md',
    curl: true,
    baseUrl: 'https://dms.us-east-1.amazonaws.com',
  },
})
