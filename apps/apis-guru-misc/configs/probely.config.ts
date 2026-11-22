import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/probely.com/1.2.0/openapi.yaml',
  output: './src/probely/routes.ts',
  template: {},
  type: { output: './src/probely/types.ts' },
  client: { output: './src/probely/client.ts', baseUrl: '/' },
  rpc: { output: './src/probely/rpc.ts', parseResponse: true },
  swr: { output: './src/probely/hooks/swr.ts' },
  'tanstack-query': { output: './src/probely/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/probely/hooks/preact-query.ts' },
  'solid-query': { output: './src/probely/hooks/solid-query.ts' },
  'vue-query': { output: './src/probely/hooks/vue-query.ts' },
  'svelte-query': { output: './src/probely/hooks/svelte-query.ts' },
  'angular-query': { output: './src/probely/hooks/angular-query.ts' },
  docs: {
    output: './src/probely/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
