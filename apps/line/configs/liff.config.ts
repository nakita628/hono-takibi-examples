import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/liff.yml',
  output: './src/liff/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/liff/types.ts' },
  client: { output: './src/liff/client.ts', baseUrl: '/' },
  rpc: { output: './src/liff/rpc.ts', parseResponse: true },
  swr: { output: './src/liff/hooks/swr.ts' },
  'tanstack-query': { output: './src/liff/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/liff/hooks/preact-query.ts' },
  'solid-query': { output: './src/liff/hooks/solid-query.ts' },
  'vue-query': { output: './src/liff/hooks/vue-query.ts' },
  'svelte-query': { output: './src/liff/hooks/svelte-query.ts' },
  'angular-query': { output: './src/liff/hooks/angular-query.ts' },
  docs: {
    output: './src/liff/api.md',
    curl: true,
    baseUrl: 'https://api.line.me/',
  },
})
