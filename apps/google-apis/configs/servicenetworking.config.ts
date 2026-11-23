import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicenetworking/v1beta/openapi.yaml',
  output: './src/servicenetworking/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/servicenetworking/types.ts' },
  client: { output: './src/servicenetworking/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicenetworking/rpc.ts', parseResponse: true },
  swr: { output: './src/servicenetworking/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicenetworking/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicenetworking/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicenetworking/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicenetworking/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicenetworking/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicenetworking/hooks/angular-query.ts' },
  docs: {
    output: './src/servicenetworking/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
