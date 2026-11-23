import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/theming/openapi.json',
  output: './src/theming/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/theming/types.ts' },
  client: { output: './src/theming/client.ts', baseUrl: '/' },
  rpc: { output: './src/theming/rpc.ts', parseResponse: true },
  swr: { output: './src/theming/hooks/swr.ts' },
  'tanstack-query': { output: './src/theming/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/theming/hooks/preact-query.ts' },
  'solid-query': { output: './src/theming/hooks/solid-query.ts' },
  'vue-query': { output: './src/theming/hooks/vue-query.ts' },
  'svelte-query': { output: './src/theming/hooks/svelte-query.ts' },
  'angular-query': { output: './src/theming/hooks/angular-query.ts' },
  docs: {
    output: './src/theming/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
