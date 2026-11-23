import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Url%20Redirects/Rollouts/149916/2026-09/urlRedirects.json',
  output: './src/cms-url-redirects/routes.ts',
  template: {},
  type: { output: './src/cms-url-redirects/types.ts' },
  client: { output: './src/cms-url-redirects/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-url-redirects/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-url-redirects/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-url-redirects/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-url-redirects/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-url-redirects/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-url-redirects/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-url-redirects/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-url-redirects/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-url-redirects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
