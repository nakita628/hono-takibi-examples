import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/states/2016-11-23/openapi.yaml',
  output: './src/states/routes.ts',
  template: {},
  type: { output: './src/states/types.ts' },
  client: { output: './src/states/client.ts', baseUrl: '/' },
  rpc: { output: './src/states/rpc.ts', parseResponse: true },
  swr: { output: './src/states/hooks/swr.ts' },
  'tanstack-query': { output: './src/states/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/states/hooks/preact-query.ts' },
  'solid-query': { output: './src/states/hooks/solid-query.ts' },
  'vue-query': { output: './src/states/hooks/vue-query.ts' },
  'svelte-query': { output: './src/states/hooks/svelte-query.ts' },
  'angular-query': { output: './src/states/hooks/angular-query.ts' },
  docs: {
    output: './src/states/api.md',
    curl: true,
    baseUrl: 'https://states.us-east-1.amazonaws.com',
  },
})
