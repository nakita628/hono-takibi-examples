import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vectortile/v1/openapi.yaml',
  output: './src/vectortile/routes.ts',
  template: {},
  type: { output: './src/vectortile/types.ts' },
  client: { output: './src/vectortile/client.ts', baseUrl: '/' },
  rpc: { output: './src/vectortile/rpc.ts', parseResponse: true },
  swr: { output: './src/vectortile/hooks/swr.ts' },
  'tanstack-query': { output: './src/vectortile/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vectortile/hooks/preact-query.ts' },
  'solid-query': { output: './src/vectortile/hooks/solid-query.ts' },
  'vue-query': { output: './src/vectortile/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vectortile/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vectortile/hooks/angular-query.ts' },
  docs: {
    output: './src/vectortile/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
