import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/updatenotification/openapi.json',
  output: './src/updatenotification/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/updatenotification/types.ts' },
  client: { output: './src/updatenotification/client.ts', baseUrl: '/' },
  rpc: { output: './src/updatenotification/rpc.ts', parseResponse: true },
  swr: { output: './src/updatenotification/hooks/swr.ts' },
  'tanstack-query': { output: './src/updatenotification/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/updatenotification/hooks/preact-query.ts' },
  'solid-query': { output: './src/updatenotification/hooks/solid-query.ts' },
  'vue-query': { output: './src/updatenotification/hooks/vue-query.ts' },
  'svelte-query': { output: './src/updatenotification/hooks/svelte-query.ts' },
  'angular-query': { output: './src/updatenotification/hooks/angular-query.ts' },
  docs: {
    output: './src/updatenotification/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
