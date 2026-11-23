import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/module-attach.yml',
  output: './src/module-attach/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/module-attach/types.ts' },
  client: { output: './src/module-attach/client.ts', baseUrl: '/' },
  rpc: { output: './src/module-attach/rpc.ts', parseResponse: true },
  swr: { output: './src/module-attach/hooks/swr.ts' },
  'tanstack-query': { output: './src/module-attach/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/module-attach/hooks/preact-query.ts' },
  'solid-query': { output: './src/module-attach/hooks/solid-query.ts' },
  'vue-query': { output: './src/module-attach/hooks/vue-query.ts' },
  'svelte-query': { output: './src/module-attach/hooks/svelte-query.ts' },
  'angular-query': { output: './src/module-attach/hooks/angular-query.ts' },
  docs: {
    output: './src/module-attach/api.md',
    curl: true,
    baseUrl: 'https://manager.line.biz',
  },
})
