import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/amplify/2017-07-25/openapi.yaml',
  output: './src/amplify/routes.ts',
  template: {},
  type: { output: './src/amplify/types.ts' },
  client: { output: './src/amplify/client.ts', baseUrl: '/' },
  rpc: { output: './src/amplify/rpc.ts', parseResponse: true },
  swr: { output: './src/amplify/hooks/swr.ts' },
  'tanstack-query': { output: './src/amplify/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amplify/hooks/preact-query.ts' },
  'solid-query': { output: './src/amplify/hooks/solid-query.ts' },
  'vue-query': { output: './src/amplify/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amplify/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amplify/hooks/angular-query.ts' },
  docs: {
    output: './src/amplify/api.md',
    curl: true,
    baseUrl: 'https://amplify.us-east-1.amazonaws.com',
  },
})
