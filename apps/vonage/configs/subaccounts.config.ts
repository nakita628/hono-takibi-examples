import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/subaccounts/1.0.8/openapi.yaml',
  output: './src/subaccounts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/subaccounts/types.ts' },
  client: { output: './src/subaccounts/client.ts', baseUrl: '/' },
  rpc: { output: './src/subaccounts/rpc.ts', parseResponse: true },
  swr: { output: './src/subaccounts/hooks/swr.ts' },
  'tanstack-query': { output: './src/subaccounts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/subaccounts/hooks/preact-query.ts' },
  'solid-query': { output: './src/subaccounts/hooks/solid-query.ts' },
  'vue-query': { output: './src/subaccounts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/subaccounts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/subaccounts/hooks/angular-query.ts' },
  docs: {
    output: './src/subaccounts/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
