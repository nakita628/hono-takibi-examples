import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Webhooks/Webhooks/Rollouts/147891/2026-09/webhooks.json',
  output: './src/webhooks-webhooks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webhooks-webhooks/types.ts' },
  client: { output: './src/webhooks-webhooks/client.ts', baseUrl: '/' },
  rpc: { output: './src/webhooks-webhooks/rpc.ts', parseResponse: true },
  swr: { output: './src/webhooks-webhooks/hooks/swr.ts' },
  'tanstack-query': { output: './src/webhooks-webhooks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webhooks-webhooks/hooks/preact-query.ts' },
  'solid-query': { output: './src/webhooks-webhooks/hooks/solid-query.ts' },
  'vue-query': { output: './src/webhooks-webhooks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webhooks-webhooks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webhooks-webhooks/hooks/angular-query.ts' },
  docs: {
    output: './src/webhooks-webhooks/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
