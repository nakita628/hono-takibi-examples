import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bintable.com/1.0.0-oas3/openapi.yaml',
  output: './src/bintable/routes.ts',
  template: {},
  type: { output: './src/bintable/types.ts' },
  client: { output: './src/bintable/client.ts', baseUrl: '/' },
  rpc: { output: './src/bintable/rpc.ts', parseResponse: true },
  swr: { output: './src/bintable/hooks/swr.ts' },
  'tanstack-query': { output: './src/bintable/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bintable/hooks/preact-query.ts' },
  'solid-query': { output: './src/bintable/hooks/solid-query.ts' },
  'vue-query': { output: './src/bintable/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bintable/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bintable/hooks/angular-query.ts' },
  docs: {
    output: './src/bintable/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
