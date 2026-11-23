import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Blog%20Settings/Rollouts/635/2026-09/blogSettings.json',
  output: './src/cms-blog-settings/routes.ts',
  template: {},
  type: { output: './src/cms-blog-settings/types.ts' },
  client: { output: './src/cms-blog-settings/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-blog-settings/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-blog-settings/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-blog-settings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-blog-settings/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-blog-settings/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-blog-settings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-blog-settings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-blog-settings/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-blog-settings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
