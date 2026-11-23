import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nitap/3.0.0/openapi.yaml',
  output: './src/nitap/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nitap/types.ts' },
  client: { output: './src/nitap/client.ts', baseUrl: '/' },
  rpc: { output: './src/nitap/rpc.ts', parseResponse: true },
  swr: { output: './src/nitap/hooks/swr.ts' },
  'tanstack-query': { output: './src/nitap/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nitap/hooks/preact-query.ts' },
  'solid-query': { output: './src/nitap/hooks/solid-query.ts' },
  'vue-query': { output: './src/nitap/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nitap/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nitap/hooks/angular-query.ts' },
  docs: {
    output: './src/nitap/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
