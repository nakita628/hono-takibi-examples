import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/binaryauthorization/v1beta1/openapi.yaml',
  output: './src/binaryauthorization/routes.ts',
  template: {},
  type: { output: './src/binaryauthorization/types.ts' },
  client: { output: './src/binaryauthorization/client.ts', baseUrl: '/' },
  rpc: { output: './src/binaryauthorization/rpc.ts', parseResponse: true },
  swr: { output: './src/binaryauthorization/hooks/swr.ts' },
  'tanstack-query': { output: './src/binaryauthorization/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/binaryauthorization/hooks/preact-query.ts' },
  'solid-query': { output: './src/binaryauthorization/hooks/solid-query.ts' },
  'vue-query': { output: './src/binaryauthorization/hooks/vue-query.ts' },
  'svelte-query': { output: './src/binaryauthorization/hooks/svelte-query.ts' },
  'angular-query': { output: './src/binaryauthorization/hooks/angular-query.ts' },
  docs: {
    output: './src/binaryauthorization/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
