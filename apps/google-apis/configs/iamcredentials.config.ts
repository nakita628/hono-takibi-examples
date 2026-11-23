import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/iamcredentials/v1/openapi.yaml',
  output: './src/iamcredentials/routes.ts',
  template: {},
  type: { output: './src/iamcredentials/types.ts' },
  client: { output: './src/iamcredentials/client.ts', baseUrl: '/' },
  rpc: { output: './src/iamcredentials/rpc.ts', parseResponse: true },
  swr: { output: './src/iamcredentials/hooks/swr.ts' },
  'tanstack-query': { output: './src/iamcredentials/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iamcredentials/hooks/preact-query.ts' },
  'solid-query': { output: './src/iamcredentials/hooks/solid-query.ts' },
  'vue-query': { output: './src/iamcredentials/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iamcredentials/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iamcredentials/hooks/angular-query.ts' },
  docs: {
    output: './src/iamcredentials/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
