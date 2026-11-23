import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mcw.edu/1.1/openapi.yaml',
  output: './src/mcw-edu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mcw-edu/types.ts' },
  client: { output: './src/mcw-edu/client.ts', baseUrl: '/' },
  rpc: { output: './src/mcw-edu/rpc.ts', parseResponse: true },
  swr: { output: './src/mcw-edu/hooks/swr.ts' },
  'tanstack-query': { output: './src/mcw-edu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mcw-edu/hooks/preact-query.ts' },
  'solid-query': { output: './src/mcw-edu/hooks/solid-query.ts' },
  'vue-query': { output: './src/mcw-edu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mcw-edu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mcw-edu/hooks/angular-query.ts' },
  docs: {
    output: './src/mcw-edu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
