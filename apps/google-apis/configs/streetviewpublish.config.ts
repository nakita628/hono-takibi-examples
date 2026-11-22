import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/streetviewpublish/v1/openapi.yaml',
  output: './src/streetviewpublish/routes.ts',
  template: {},
  type: { output: './src/streetviewpublish/types.ts' },
  client: { output: './src/streetviewpublish/client.ts', baseUrl: '/' },
  rpc: { output: './src/streetviewpublish/rpc.ts', parseResponse: true },
  swr: { output: './src/streetviewpublish/hooks/swr.ts' },
  'tanstack-query': { output: './src/streetviewpublish/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/streetviewpublish/hooks/preact-query.ts' },
  'solid-query': { output: './src/streetviewpublish/hooks/solid-query.ts' },
  'vue-query': { output: './src/streetviewpublish/hooks/vue-query.ts' },
  'svelte-query': { output: './src/streetviewpublish/hooks/svelte-query.ts' },
  'angular-query': { output: './src/streetviewpublish/hooks/angular-query.ts' },
  docs: {
    output: './src/streetviewpublish/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
