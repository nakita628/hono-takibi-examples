import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/module.yml',
  output: './src/module/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/module/types.ts' },
  client: { output: './src/module/client.ts', baseUrl: '/' },
  rpc: { output: './src/module/rpc.ts', parseResponse: true },
  swr: { output: './src/module/hooks/swr.ts' },
  'tanstack-query': { output: './src/module/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/module/hooks/preact-query.ts' },
  'solid-query': { output: './src/module/hooks/solid-query.ts' },
  'vue-query': { output: './src/module/hooks/vue-query.ts' },
  'svelte-query': { output: './src/module/hooks/svelte-query.ts' },
  'angular-query': { output: './src/module/hooks/angular-query.ts' },
  docs: {
    output: './src/module/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
