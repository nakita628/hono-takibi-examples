import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Source%20Code/Rollouts/140886/2026-09/sourceCode.json',
  output: './src/cms-source-code/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cms-source-code/types.ts' },
  client: { output: './src/cms-source-code/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-source-code/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-source-code/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-source-code/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-source-code/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-source-code/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-source-code/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-source-code/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-source-code/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-source-code/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
