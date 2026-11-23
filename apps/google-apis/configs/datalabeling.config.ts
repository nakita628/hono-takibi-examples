import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datalabeling/v1beta1/openapi.yaml',
  output: './src/datalabeling/routes.ts',
  template: {},
  type: { output: './src/datalabeling/types.ts' },
  client: { output: './src/datalabeling/client.ts', baseUrl: '/' },
  rpc: { output: './src/datalabeling/rpc.ts', parseResponse: true },
  swr: { output: './src/datalabeling/hooks/swr.ts' },
  'tanstack-query': { output: './src/datalabeling/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datalabeling/hooks/preact-query.ts' },
  'solid-query': { output: './src/datalabeling/hooks/solid-query.ts' },
  'vue-query': { output: './src/datalabeling/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datalabeling/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datalabeling/hooks/angular-query.ts' },
  docs: {
    output: './src/datalabeling/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
