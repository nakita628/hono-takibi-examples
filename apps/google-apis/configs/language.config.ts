import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/language/v1beta1/openapi.yaml',
  output: './src/language/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/language/types.ts' },
  client: { output: './src/language/client.ts', baseUrl: '/' },
  rpc: { output: './src/language/rpc.ts', parseResponse: true },
  swr: { output: './src/language/hooks/swr.ts' },
  'tanstack-query': { output: './src/language/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/language/hooks/preact-query.ts' },
  'solid-query': { output: './src/language/hooks/solid-query.ts' },
  'vue-query': { output: './src/language/hooks/vue-query.ts' },
  'svelte-query': { output: './src/language/hooks/svelte-query.ts' },
  'angular-query': { output: './src/language/hooks/angular-query.ts' },
  docs: {
    output: './src/language/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
