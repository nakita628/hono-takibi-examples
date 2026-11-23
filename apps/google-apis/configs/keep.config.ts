import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/keep/v1/openapi.yaml',
  output: './src/keep/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/keep/types.ts' },
  client: { output: './src/keep/client.ts', baseUrl: '/' },
  rpc: { output: './src/keep/rpc.ts', parseResponse: true },
  swr: { output: './src/keep/hooks/swr.ts' },
  'tanstack-query': { output: './src/keep/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/keep/hooks/preact-query.ts' },
  'solid-query': { output: './src/keep/hooks/solid-query.ts' },
  'vue-query': { output: './src/keep/hooks/vue-query.ts' },
  'svelte-query': { output: './src/keep/hooks/svelte-query.ts' },
  'angular-query': { output: './src/keep/hooks/angular-query.ts' },
  docs: {
    output: './src/keep/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
