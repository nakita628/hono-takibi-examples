import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/systemtags/openapi.json',
  output: './src/systemtags/routes.ts',
  template: {},
  type: { output: './src/systemtags/types.ts' },
  client: { output: './src/systemtags/client.ts', baseUrl: '/' },
  rpc: { output: './src/systemtags/rpc.ts', parseResponse: true },
  swr: { output: './src/systemtags/hooks/swr.ts' },
  'tanstack-query': { output: './src/systemtags/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/systemtags/hooks/preact-query.ts' },
  'solid-query': { output: './src/systemtags/hooks/solid-query.ts' },
  'vue-query': { output: './src/systemtags/hooks/vue-query.ts' },
  'svelte-query': { output: './src/systemtags/hooks/svelte-query.ts' },
  'angular-query': { output: './src/systemtags/hooks/angular-query.ts' },
  docs: {
    output: './src/systemtags/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
