import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/banking/2.1.0/openapi.yaml',
  output: './src/codat-io-banking/routes.ts',
  template: {},
  type: { output: './src/codat-io-banking/types.ts' },
  client: { output: './src/codat-io-banking/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-banking/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-banking/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-banking/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-banking/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-banking/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-banking/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-banking/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-banking/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-banking/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
