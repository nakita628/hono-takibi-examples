import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/homegraph/v1/openapi.yaml',
  output: './src/homegraph/routes.ts',
  template: {},
  type: { output: './src/homegraph/types.ts' },
  client: { output: './src/homegraph/client.ts', baseUrl: '/' },
  rpc: { output: './src/homegraph/rpc.ts', parseResponse: true },
  swr: { output: './src/homegraph/hooks/swr.ts' },
  'tanstack-query': { output: './src/homegraph/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/homegraph/hooks/preact-query.ts' },
  'solid-query': { output: './src/homegraph/hooks/solid-query.ts' },
  'vue-query': { output: './src/homegraph/hooks/vue-query.ts' },
  'svelte-query': { output: './src/homegraph/hooks/svelte-query.ts' },
  'angular-query': { output: './src/homegraph/hooks/angular-query.ts' },
  docs: {
    output: './src/homegraph/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
