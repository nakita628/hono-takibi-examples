import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/searchconsole/v1/openapi.yaml',
  output: './src/searchconsole/routes.ts',
  template: {},
  type: { output: './src/searchconsole/types.ts' },
  client: { output: './src/searchconsole/client.ts', baseUrl: '/' },
  rpc: { output: './src/searchconsole/rpc.ts', parseResponse: true },
  swr: { output: './src/searchconsole/hooks/swr.ts' },
  'tanstack-query': { output: './src/searchconsole/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/searchconsole/hooks/preact-query.ts' },
  'solid-query': { output: './src/searchconsole/hooks/solid-query.ts' },
  'vue-query': { output: './src/searchconsole/hooks/vue-query.ts' },
  'svelte-query': { output: './src/searchconsole/hooks/svelte-query.ts' },
  'angular-query': { output: './src/searchconsole/hooks/angular-query.ts' },
  docs: {
    output: './src/searchconsole/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
