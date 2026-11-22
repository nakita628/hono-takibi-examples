import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jeecup/3.0.0/openapi.yaml',
  output: './src/jeecup/routes.ts',
  template: {},
  type: { output: './src/jeecup/types.ts' },
  client: { output: './src/jeecup/client.ts', baseUrl: '/' },
  rpc: { output: './src/jeecup/rpc.ts', parseResponse: true },
  swr: { output: './src/jeecup/hooks/swr.ts' },
  'tanstack-query': { output: './src/jeecup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jeecup/hooks/preact-query.ts' },
  'solid-query': { output: './src/jeecup/hooks/solid-query.ts' },
  'vue-query': { output: './src/jeecup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jeecup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jeecup/hooks/angular-query.ts' },
  docs: {
    output: './src/jeecup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
