import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/assess/1.0/openapi.yaml',
  output: './src/codat-io-assess/routes.ts',
  template: {},
  type: { output: './src/codat-io-assess/types.ts' },
  client: { output: './src/codat-io-assess/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-assess/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-assess/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-assess/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-assess/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-assess/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-assess/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-assess/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-assess/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-assess/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
