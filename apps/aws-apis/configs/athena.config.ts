import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/athena/2017-05-18/openapi.yaml',
  output: './src/athena/routes.ts',
  template: {},
  type: { output: './src/athena/types.ts' },
  client: { output: './src/athena/client.ts', baseUrl: '/' },
  rpc: { output: './src/athena/rpc.ts', parseResponse: true },
  swr: { output: './src/athena/hooks/swr.ts' },
  'tanstack-query': { output: './src/athena/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/athena/hooks/preact-query.ts' },
  'solid-query': { output: './src/athena/hooks/solid-query.ts' },
  'vue-query': { output: './src/athena/hooks/vue-query.ts' },
  'svelte-query': { output: './src/athena/hooks/svelte-query.ts' },
  'angular-query': { output: './src/athena/hooks/angular-query.ts' },
  docs: {
    output: './src/athena/api.md',
    curl: true,
    baseUrl: 'https://athena.us-east-1.amazonaws.com',
  },
})
