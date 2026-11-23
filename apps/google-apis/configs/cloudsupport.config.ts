import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudsupport/v2beta/openapi.yaml',
  output: './src/cloudsupport/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudsupport/types.ts' },
  client: { output: './src/cloudsupport/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudsupport/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudsupport/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudsupport/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudsupport/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudsupport/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudsupport/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudsupport/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudsupport/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudsupport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
