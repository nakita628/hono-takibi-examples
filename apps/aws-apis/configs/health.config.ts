import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/health/2016-08-04/openapi.yaml',
  output: './src/health/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/health/types.ts' },
  client: { output: './src/health/client.ts', baseUrl: '/' },
  rpc: { output: './src/health/rpc.ts', parseResponse: true },
  swr: { output: './src/health/hooks/swr.ts' },
  'tanstack-query': { output: './src/health/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/health/hooks/preact-query.ts' },
  'solid-query': { output: './src/health/hooks/solid-query.ts' },
  'vue-query': { output: './src/health/hooks/vue-query.ts' },
  'svelte-query': { output: './src/health/hooks/svelte-query.ts' },
  'angular-query': { output: './src/health/hooks/angular-query.ts' },
  docs: {
    output: './src/health/api.md',
    curl: true,
    baseUrl: 'https://health.us-east-1.amazonaws.com',
  },
})
