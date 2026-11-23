import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/manufacturers/v1/openapi.yaml',
  output: './src/manufacturers/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/manufacturers/types.ts' },
  client: { output: './src/manufacturers/client.ts', baseUrl: '/' },
  rpc: { output: './src/manufacturers/rpc.ts', parseResponse: true },
  swr: { output: './src/manufacturers/hooks/swr.ts' },
  'tanstack-query': { output: './src/manufacturers/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/manufacturers/hooks/preact-query.ts' },
  'solid-query': { output: './src/manufacturers/hooks/solid-query.ts' },
  'vue-query': { output: './src/manufacturers/hooks/vue-query.ts' },
  'svelte-query': { output: './src/manufacturers/hooks/svelte-query.ts' },
  'angular-query': { output: './src/manufacturers/hooks/angular-query.ts' },
  docs: {
    output: './src/manufacturers/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
