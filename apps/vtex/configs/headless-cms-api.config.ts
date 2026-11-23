import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Headless-CMS-API/0.31.2/openapi.yaml',
  output: './src/headless-cms-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/headless-cms-api/types.ts' },
  client: { output: './src/headless-cms-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/headless-cms-api/rpc.ts', parseResponse: true },
  swr: { output: './src/headless-cms-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/headless-cms-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/headless-cms-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/headless-cms-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/headless-cms-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/headless-cms-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/headless-cms-api/hooks/angular-query.ts' },
  docs: {
    output: './src/headless-cms-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
