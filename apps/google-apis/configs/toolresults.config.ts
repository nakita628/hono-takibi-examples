import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/toolresults/v1beta3/openapi.yaml',
  output: './src/toolresults/routes.ts',
  template: {},
  type: { output: './src/toolresults/types.ts' },
  client: { output: './src/toolresults/client.ts', baseUrl: '/' },
  rpc: { output: './src/toolresults/rpc.ts', parseResponse: true },
  swr: { output: './src/toolresults/hooks/swr.ts' },
  'tanstack-query': { output: './src/toolresults/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/toolresults/hooks/preact-query.ts' },
  'solid-query': { output: './src/toolresults/hooks/solid-query.ts' },
  'vue-query': { output: './src/toolresults/hooks/vue-query.ts' },
  'svelte-query': { output: './src/toolresults/hooks/svelte-query.ts' },
  'angular-query': { output: './src/toolresults/hooks/angular-query.ts' },
  docs: {
    output: './src/toolresults/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
