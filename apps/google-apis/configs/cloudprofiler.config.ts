import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudprofiler/v2/openapi.yaml',
  output: './src/cloudprofiler/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudprofiler/types.ts' },
  client: { output: './src/cloudprofiler/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudprofiler/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudprofiler/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudprofiler/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudprofiler/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudprofiler/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudprofiler/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudprofiler/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudprofiler/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudprofiler/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
