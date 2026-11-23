import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Media%20Bridge/Rollouts/787/2026-09/mediaBridge.json',
  output: './src/cms-media-bridge/routes.ts',
  template: {},
  type: { output: './src/cms-media-bridge/types.ts' },
  client: { output: './src/cms-media-bridge/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-media-bridge/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-media-bridge/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-media-bridge/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-media-bridge/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-media-bridge/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-media-bridge/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-media-bridge/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-media-bridge/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-media-bridge/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
