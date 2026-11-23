import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Url%20Mappings/Rollouts/149915/2026-09/urlMappings.json',
  output: './src/cms-url-mappings/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cms-url-mappings/types.ts' },
  client: { output: './src/cms-url-mappings/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-url-mappings/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-url-mappings/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-url-mappings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-url-mappings/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-url-mappings/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-url-mappings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-url-mappings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-url-mappings/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-url-mappings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
