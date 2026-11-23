import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ktech/3.0.0/openapi.yaml',
  output: './src/ktech/routes.ts',
  template: {},
  type: { output: './src/ktech/types.ts' },
  client: { output: './src/ktech/client.ts', baseUrl: '/' },
  rpc: { output: './src/ktech/rpc.ts', parseResponse: true },
  swr: { output: './src/ktech/hooks/swr.ts' },
  'tanstack-query': { output: './src/ktech/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ktech/hooks/preact-query.ts' },
  'solid-query': { output: './src/ktech/hooks/solid-query.ts' },
  'vue-query': { output: './src/ktech/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ktech/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ktech/hooks/angular-query.ts' },
  docs: {
    output: './src/ktech/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
