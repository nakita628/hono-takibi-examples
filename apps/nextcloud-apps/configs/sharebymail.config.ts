import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/sharebymail/openapi.json',
  output: './src/sharebymail/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sharebymail/types.ts' },
  client: { output: './src/sharebymail/client.ts', baseUrl: '/' },
  rpc: { output: './src/sharebymail/rpc.ts', parseResponse: true },
  swr: { output: './src/sharebymail/hooks/swr.ts' },
  'tanstack-query': { output: './src/sharebymail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sharebymail/hooks/preact-query.ts' },
  'solid-query': { output: './src/sharebymail/hooks/solid-query.ts' },
  'vue-query': { output: './src/sharebymail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sharebymail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sharebymail/hooks/angular-query.ts' },
  docs: {
    output: './src/sharebymail/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
