import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/user_status/openapi.json',
  output: './src/user-status/routes.ts',
  template: {},
  type: { output: './src/user-status/types.ts' },
  client: { output: './src/user-status/client.ts', baseUrl: '/' },
  rpc: { output: './src/user-status/rpc.ts', parseResponse: true },
  swr: { output: './src/user-status/hooks/swr.ts' },
  'tanstack-query': { output: './src/user-status/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/user-status/hooks/preact-query.ts' },
  'solid-query': { output: './src/user-status/hooks/solid-query.ts' },
  'vue-query': { output: './src/user-status/hooks/vue-query.ts' },
  'svelte-query': { output: './src/user-status/hooks/svelte-query.ts' },
  'angular-query': { output: './src/user-status/hooks/angular-query.ts' },
  docs: {
    output: './src/user-status/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
