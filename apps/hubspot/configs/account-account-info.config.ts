import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Account/Account%20Info/Rollouts/318954/2026-09/accountInfo.json',
  output: './src/account-account-info/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/account-account-info/types.ts' },
  client: { output: './src/account-account-info/client.ts', baseUrl: '/' },
  rpc: { output: './src/account-account-info/rpc.ts', parseResponse: true },
  swr: { output: './src/account-account-info/hooks/swr.ts' },
  'tanstack-query': { output: './src/account-account-info/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/account-account-info/hooks/preact-query.ts' },
  'solid-query': { output: './src/account-account-info/hooks/solid-query.ts' },
  'vue-query': { output: './src/account-account-info/hooks/vue-query.ts' },
  'svelte-query': { output: './src/account-account-info/hooks/svelte-query.ts' },
  'angular-query': { output: './src/account-account-info/hooks/angular-query.ts' },
  docs: {
    output: './src/account-account-info/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
