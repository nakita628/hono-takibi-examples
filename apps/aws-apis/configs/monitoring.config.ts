import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/monitoring/2010-08-01/openapi.yaml',
  output: './src/monitoring/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/monitoring/types.ts' },
  client: { output: './src/monitoring/client.ts', baseUrl: '/' },
  rpc: { output: './src/monitoring/rpc.ts', parseResponse: true },
  swr: { output: './src/monitoring/hooks/swr.ts' },
  'tanstack-query': { output: './src/monitoring/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/monitoring/hooks/preact-query.ts' },
  'solid-query': { output: './src/monitoring/hooks/solid-query.ts' },
  'vue-query': { output: './src/monitoring/hooks/vue-query.ts' },
  'svelte-query': { output: './src/monitoring/hooks/svelte-query.ts' },
  'angular-query': { output: './src/monitoring/hooks/angular-query.ts' },
  docs: {
    output: './src/monitoring/api.md',
    curl: true,
    baseUrl: 'https://monitoring.us-east-1.amazonaws.com',
  },
})
