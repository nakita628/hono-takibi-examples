import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudtrace/v2beta1/openapi.yaml',
  output: './src/cloudtrace/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudtrace/types.ts' },
  client: { output: './src/cloudtrace/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudtrace/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudtrace/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudtrace/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudtrace/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudtrace/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudtrace/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudtrace/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudtrace/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudtrace/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
