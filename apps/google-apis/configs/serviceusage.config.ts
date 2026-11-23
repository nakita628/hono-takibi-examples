import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/serviceusage/v1beta1/openapi.yaml',
  output: './src/serviceusage/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/serviceusage/types.ts' },
  client: { output: './src/serviceusage/client.ts', baseUrl: '/' },
  rpc: { output: './src/serviceusage/rpc.ts', parseResponse: true },
  swr: { output: './src/serviceusage/hooks/swr.ts' },
  'tanstack-query': { output: './src/serviceusage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/serviceusage/hooks/preact-query.ts' },
  'solid-query': { output: './src/serviceusage/hooks/solid-query.ts' },
  'vue-query': { output: './src/serviceusage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/serviceusage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/serviceusage/hooks/angular-query.ts' },
  docs: {
    output: './src/serviceusage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
