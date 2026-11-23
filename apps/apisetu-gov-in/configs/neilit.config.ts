import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/neilit/3.0.0/openapi.yaml',
  output: './src/neilit/routes.ts',
  template: {},
  type: { output: './src/neilit/types.ts' },
  client: { output: './src/neilit/client.ts', baseUrl: '/' },
  rpc: { output: './src/neilit/rpc.ts', parseResponse: true },
  swr: { output: './src/neilit/hooks/swr.ts' },
  'tanstack-query': { output: './src/neilit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/neilit/hooks/preact-query.ts' },
  'solid-query': { output: './src/neilit/hooks/solid-query.ts' },
  'vue-query': { output: './src/neilit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/neilit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/neilit/hooks/angular-query.ts' },
  docs: {
    output: './src/neilit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
