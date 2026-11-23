import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/acm/2015-12-08/openapi.yaml',
  output: './src/acm/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/acm/types.ts' },
  client: { output: './src/acm/client.ts', baseUrl: '/' },
  rpc: { output: './src/acm/rpc.ts', parseResponse: true },
  swr: { output: './src/acm/hooks/swr.ts' },
  'tanstack-query': { output: './src/acm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/acm/hooks/preact-query.ts' },
  'solid-query': { output: './src/acm/hooks/solid-query.ts' },
  'vue-query': { output: './src/acm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/acm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/acm/hooks/angular-query.ts' },
  docs: {
    output: './src/acm/api.md',
    curl: true,
    baseUrl: 'https://acm.us-east-1.amazonaws.com',
  },
})
