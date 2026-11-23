import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Single-send/Rollouts/106894/2026-09/singlesend.json',
  output: './src/marketing-single-send/routes.ts',
  template: {},
  type: { output: './src/marketing-single-send/types.ts' },
  client: { output: './src/marketing-single-send/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketing-single-send/rpc.ts', parseResponse: true },
  swr: { output: './src/marketing-single-send/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketing-single-send/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketing-single-send/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketing-single-send/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketing-single-send/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketing-single-send/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketing-single-send/hooks/angular-query.ts' },
  docs: {
    output: './src/marketing-single-send/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
