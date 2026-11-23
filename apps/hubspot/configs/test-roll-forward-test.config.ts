import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Test/Roll%20Forward%20Test/Rollouts/260892/2026-09/rollForwardTest.json',
  output: './src/test-roll-forward-test/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/test-roll-forward-test/types.ts' },
  client: { output: './src/test-roll-forward-test/client.ts', baseUrl: '/' },
  rpc: { output: './src/test-roll-forward-test/rpc.ts', parseResponse: true },
  swr: { output: './src/test-roll-forward-test/hooks/swr.ts' },
  'tanstack-query': { output: './src/test-roll-forward-test/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/test-roll-forward-test/hooks/preact-query.ts' },
  'solid-query': { output: './src/test-roll-forward-test/hooks/solid-query.ts' },
  'vue-query': { output: './src/test-roll-forward-test/hooks/vue-query.ts' },
  'svelte-query': { output: './src/test-roll-forward-test/hooks/svelte-query.ts' },
  'angular-query': { output: './src/test-roll-forward-test/hooks/angular-query.ts' },
  docs: {
    output: './src/test-roll-forward-test/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
