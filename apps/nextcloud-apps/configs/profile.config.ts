import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/profile/openapi.json',
  output: './src/profile/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/profile/types.ts' },
  client: { output: './src/profile/client.ts', baseUrl: '/' },
  rpc: { output: './src/profile/rpc.ts', parseResponse: true },
  swr: { output: './src/profile/hooks/swr.ts' },
  'tanstack-query': { output: './src/profile/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/profile/hooks/preact-query.ts' },
  'solid-query': { output: './src/profile/hooks/solid-query.ts' },
  'vue-query': { output: './src/profile/hooks/vue-query.ts' },
  'svelte-query': { output: './src/profile/hooks/svelte-query.ts' },
  'angular-query': { output: './src/profile/hooks/angular-query.ts' },
  docs: {
    output: './src/profile/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
