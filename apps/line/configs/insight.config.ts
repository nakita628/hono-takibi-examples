import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/insight.yml',
  output: './src/insight/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/insight/types.ts' },
  client: { output: './src/insight/client.ts', baseUrl: '/' },
  rpc: { output: './src/insight/rpc.ts', parseResponse: true },
  swr: { output: './src/insight/hooks/swr.ts' },
  'tanstack-query': { output: './src/insight/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/insight/hooks/preact-query.ts' },
  'solid-query': { output: './src/insight/hooks/solid-query.ts' },
  'vue-query': { output: './src/insight/hooks/vue-query.ts' },
  'svelte-query': { output: './src/insight/hooks/svelte-query.ts' },
  'angular-query': { output: './src/insight/hooks/angular-query.ts' },
  docs: {
    output: './src/insight/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
