import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/account/1.0.4/openapi.yaml',
  output: './src/account/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/account/types.ts' },
  client: { output: './src/account/client.ts', baseUrl: '/' },
  rpc: { output: './src/account/rpc.ts', parseResponse: true },
  swr: { output: './src/account/hooks/swr.ts' },
  'tanstack-query': { output: './src/account/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/account/hooks/preact-query.ts' },
  'solid-query': { output: './src/account/hooks/solid-query.ts' },
  'vue-query': { output: './src/account/hooks/vue-query.ts' },
  'svelte-query': { output: './src/account/hooks/svelte-query.ts' },
  'angular-query': { output: './src/account/hooks/angular-query.ts' },
  docs: {
    output: './src/account/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
