import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/fis/2020-12-01/openapi.yaml',
  output: './src/fis/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fis/types.ts' },
  client: { output: './src/fis/client.ts', baseUrl: '/' },
  rpc: { output: './src/fis/rpc.ts', parseResponse: true },
  swr: { output: './src/fis/hooks/swr.ts' },
  'tanstack-query': { output: './src/fis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fis/hooks/preact-query.ts' },
  'solid-query': { output: './src/fis/hooks/solid-query.ts' },
  'vue-query': { output: './src/fis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fis/hooks/angular-query.ts' },
  docs: {
    output: './src/fis/api.md',
    curl: true,
    baseUrl: 'https://fis.us-east-1.amazonaws.com',
  },
})
