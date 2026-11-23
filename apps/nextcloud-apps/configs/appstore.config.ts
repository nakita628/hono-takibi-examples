import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/appstore/openapi.json',
  output: './src/appstore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/appstore/types.ts' },
  client: { output: './src/appstore/client.ts', baseUrl: '/' },
  rpc: { output: './src/appstore/rpc.ts', parseResponse: true },
  swr: { output: './src/appstore/hooks/swr.ts' },
  'tanstack-query': { output: './src/appstore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appstore/hooks/preact-query.ts' },
  'solid-query': { output: './src/appstore/hooks/solid-query.ts' },
  'vue-query': { output: './src/appstore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appstore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appstore/hooks/angular-query.ts' },
  docs: {
    output: './src/appstore/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
