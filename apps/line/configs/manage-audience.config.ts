import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/manage-audience.yml',
  output: './src/manage-audience/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/manage-audience/types.ts' },
  client: { output: './src/manage-audience/client.ts', baseUrl: '/' },
  rpc: { output: './src/manage-audience/rpc.ts', parseResponse: true },
  swr: { output: './src/manage-audience/hooks/swr.ts' },
  'tanstack-query': { output: './src/manage-audience/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/manage-audience/hooks/preact-query.ts' },
  'solid-query': { output: './src/manage-audience/hooks/solid-query.ts' },
  'vue-query': { output: './src/manage-audience/hooks/vue-query.ts' },
  'svelte-query': { output: './src/manage-audience/hooks/svelte-query.ts' },
  'angular-query': { output: './src/manage-audience/hooks/angular-query.ts' },
  docs: {
    output: './src/manage-audience/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
