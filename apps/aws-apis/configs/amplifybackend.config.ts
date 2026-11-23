import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/amplifybackend/2020-08-11/openapi.yaml',
  output: './src/amplifybackend/routes.ts',
  template: {},
  type: { output: './src/amplifybackend/types.ts' },
  client: { output: './src/amplifybackend/client.ts', baseUrl: '/' },
  rpc: { output: './src/amplifybackend/rpc.ts', parseResponse: true },
  swr: { output: './src/amplifybackend/hooks/swr.ts' },
  'tanstack-query': { output: './src/amplifybackend/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amplifybackend/hooks/preact-query.ts' },
  'solid-query': { output: './src/amplifybackend/hooks/solid-query.ts' },
  'vue-query': { output: './src/amplifybackend/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amplifybackend/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amplifybackend/hooks/angular-query.ts' },
  docs: {
    output: './src/amplifybackend/api.md',
    curl: true,
    baseUrl: 'https://amplifybackend.us-east-1.amazonaws.com',
  },
})
