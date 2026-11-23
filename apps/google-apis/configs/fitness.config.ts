import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/fitness/v1/openapi.yaml',
  output: './src/fitness/routes.ts',
  template: {},
  type: { output: './src/fitness/types.ts' },
  client: { output: './src/fitness/client.ts', baseUrl: '/' },
  rpc: { output: './src/fitness/rpc.ts', parseResponse: true },
  swr: { output: './src/fitness/hooks/swr.ts' },
  'tanstack-query': { output: './src/fitness/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fitness/hooks/preact-query.ts' },
  'solid-query': { output: './src/fitness/hooks/solid-query.ts' },
  'vue-query': { output: './src/fitness/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fitness/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fitness/hooks/angular-query.ts' },
  docs: {
    output: './src/fitness/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
