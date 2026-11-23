import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/enibandhanjh/3.0.0/openapi.yaml',
  output: './src/enibandhanjh/routes.ts',
  template: {},
  type: { output: './src/enibandhanjh/types.ts' },
  client: { output: './src/enibandhanjh/client.ts', baseUrl: '/' },
  rpc: { output: './src/enibandhanjh/rpc.ts', parseResponse: true },
  swr: { output: './src/enibandhanjh/hooks/swr.ts' },
  'tanstack-query': { output: './src/enibandhanjh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/enibandhanjh/hooks/preact-query.ts' },
  'solid-query': { output: './src/enibandhanjh/hooks/solid-query.ts' },
  'vue-query': { output: './src/enibandhanjh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/enibandhanjh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/enibandhanjh/hooks/angular-query.ts' },
  docs: {
    output: './src/enibandhanjh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
