import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/hris/9.3.0/openapi.yaml',
  output: './src/hris/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hris/types.ts' },
  client: { output: './src/hris/client.ts', baseUrl: '/' },
  rpc: { output: './src/hris/rpc.ts', parseResponse: true },
  swr: { output: './src/hris/hooks/swr.ts' },
  'tanstack-query': { output: './src/hris/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hris/hooks/preact-query.ts' },
  'solid-query': { output: './src/hris/hooks/solid-query.ts' },
  'vue-query': { output: './src/hris/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hris/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hris/hooks/angular-query.ts' },
  docs: {
    output: './src/hris/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
