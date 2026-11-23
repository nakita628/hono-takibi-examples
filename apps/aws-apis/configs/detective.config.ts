import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/detective/2018-10-26/openapi.yaml',
  output: './src/detective/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/detective/types.ts' },
  client: { output: './src/detective/client.ts', baseUrl: '/' },
  rpc: { output: './src/detective/rpc.ts', parseResponse: true },
  swr: { output: './src/detective/hooks/swr.ts' },
  'tanstack-query': { output: './src/detective/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/detective/hooks/preact-query.ts' },
  'solid-query': { output: './src/detective/hooks/solid-query.ts' },
  'vue-query': { output: './src/detective/hooks/vue-query.ts' },
  'svelte-query': { output: './src/detective/hooks/svelte-query.ts' },
  'angular-query': { output: './src/detective/hooks/angular-query.ts' },
  docs: {
    output: './src/detective/api.md',
    curl: true,
    baseUrl: 'https://detective.us-east-1.amazonaws.com',
  },
})
