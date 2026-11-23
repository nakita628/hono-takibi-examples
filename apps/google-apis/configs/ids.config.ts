import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ids/v1/openapi.yaml',
  output: './src/ids/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ids/types.ts' },
  client: { output: './src/ids/client.ts', baseUrl: '/' },
  rpc: { output: './src/ids/rpc.ts', parseResponse: true },
  swr: { output: './src/ids/hooks/swr.ts' },
  'tanstack-query': { output: './src/ids/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ids/hooks/preact-query.ts' },
  'solid-query': { output: './src/ids/hooks/solid-query.ts' },
  'vue-query': { output: './src/ids/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ids/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ids/hooks/angular-query.ts' },
  docs: {
    output: './src/ids/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
