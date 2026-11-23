import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/signer/2017-08-25/openapi.yaml',
  output: './src/signer/routes.ts',
  template: {},
  type: { output: './src/signer/types.ts' },
  client: { output: './src/signer/client.ts', baseUrl: '/' },
  rpc: { output: './src/signer/rpc.ts', parseResponse: true },
  swr: { output: './src/signer/hooks/swr.ts' },
  'tanstack-query': { output: './src/signer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/signer/hooks/preact-query.ts' },
  'solid-query': { output: './src/signer/hooks/solid-query.ts' },
  'vue-query': { output: './src/signer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/signer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/signer/hooks/angular-query.ts' },
  docs: {
    output: './src/signer/api.md',
    curl: true,
    baseUrl: 'https://signer.us-east-1.amazonaws.com',
  },
})
