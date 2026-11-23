import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Recurrence-(v1-/1.0/openapi.yaml',
  output: './src/recurrence-v1/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/recurrence-v1/types.ts' },
  client: { output: './src/recurrence-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/recurrence-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/recurrence-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/recurrence-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/recurrence-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/recurrence-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/recurrence-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/recurrence-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/recurrence-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/recurrence-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
