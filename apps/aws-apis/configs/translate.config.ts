import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/translate/2017-07-01/openapi.yaml',
  output: './src/translate/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/translate/types.ts' },
  client: { output: './src/translate/client.ts', baseUrl: '/' },
  rpc: { output: './src/translate/rpc.ts', parseResponse: true },
  swr: { output: './src/translate/hooks/swr.ts' },
  'tanstack-query': { output: './src/translate/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/translate/hooks/preact-query.ts' },
  'solid-query': { output: './src/translate/hooks/solid-query.ts' },
  'vue-query': { output: './src/translate/hooks/vue-query.ts' },
  'svelte-query': { output: './src/translate/hooks/svelte-query.ts' },
  'angular-query': { output: './src/translate/hooks/angular-query.ts' },
  docs: {
    output: './src/translate/api.md',
    curl: true,
    baseUrl: 'https://translate.us-east-1.amazonaws.com',
  },
})
