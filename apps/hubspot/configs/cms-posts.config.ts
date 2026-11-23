import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Posts/Rollouts/635/2026-09/posts.json',
  output: './src/cms-posts/routes.ts',
  template: {},
  type: { output: './src/cms-posts/types.ts' },
  client: { output: './src/cms-posts/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-posts/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-posts/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-posts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-posts/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-posts/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-posts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-posts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-posts/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-posts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
