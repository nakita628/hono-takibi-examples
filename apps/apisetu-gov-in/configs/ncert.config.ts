import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ncert/3.0.0/openapi.yaml',
  output: './src/ncert/routes.ts',
  template: {},
  type: { output: './src/ncert/types.ts' },
  client: { output: './src/ncert/client.ts', baseUrl: '/' },
  rpc: { output: './src/ncert/rpc.ts', parseResponse: true },
  swr: { output: './src/ncert/hooks/swr.ts' },
  'tanstack-query': { output: './src/ncert/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ncert/hooks/preact-query.ts' },
  'solid-query': { output: './src/ncert/hooks/solid-query.ts' },
  'vue-query': { output: './src/ncert/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ncert/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ncert/hooks/angular-query.ts' },
  docs: {
    output: './src/ncert/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
