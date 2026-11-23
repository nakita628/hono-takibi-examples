import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Files/Files/Rollouts/319002/2026-09/files.json',
  output: './src/files-files/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/files-files/types.ts' },
  client: { output: './src/files-files/client.ts', baseUrl: '/' },
  rpc: { output: './src/files-files/rpc.ts', parseResponse: true },
  swr: { output: './src/files-files/hooks/swr.ts' },
  'tanstack-query': { output: './src/files-files/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files-files/hooks/preact-query.ts' },
  'solid-query': { output: './src/files-files/hooks/solid-query.ts' },
  'vue-query': { output: './src/files-files/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files-files/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files-files/hooks/angular-query.ts' },
  docs: {
    output: './src/files-files/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
