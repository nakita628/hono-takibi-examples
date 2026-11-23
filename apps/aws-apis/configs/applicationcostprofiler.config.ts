import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/applicationcostprofiler/2020-09-10/openapi.yaml',
  output: './src/applicationcostprofiler/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/applicationcostprofiler/types.ts' },
  client: { output: './src/applicationcostprofiler/client.ts', baseUrl: '/' },
  rpc: { output: './src/applicationcostprofiler/rpc.ts', parseResponse: true },
  swr: { output: './src/applicationcostprofiler/hooks/swr.ts' },
  'tanstack-query': { output: './src/applicationcostprofiler/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/applicationcostprofiler/hooks/preact-query.ts' },
  'solid-query': { output: './src/applicationcostprofiler/hooks/solid-query.ts' },
  'vue-query': { output: './src/applicationcostprofiler/hooks/vue-query.ts' },
  'svelte-query': { output: './src/applicationcostprofiler/hooks/svelte-query.ts' },
  'angular-query': { output: './src/applicationcostprofiler/hooks/angular-query.ts' },
  docs: {
    output: './src/applicationcostprofiler/api.md',
    curl: true,
    baseUrl: 'https://applicationcostprofiler.us-east-1.amazonaws.com',
  },
})
