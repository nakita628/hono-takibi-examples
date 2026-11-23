import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workmail/2017-10-01/openapi.yaml',
  output: './src/workmail/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/workmail/types.ts' },
  client: { output: './src/workmail/client.ts', baseUrl: '/' },
  rpc: { output: './src/workmail/rpc.ts', parseResponse: true },
  swr: { output: './src/workmail/hooks/swr.ts' },
  'tanstack-query': { output: './src/workmail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workmail/hooks/preact-query.ts' },
  'solid-query': { output: './src/workmail/hooks/solid-query.ts' },
  'vue-query': { output: './src/workmail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workmail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workmail/hooks/angular-query.ts' },
  docs: {
    output: './src/workmail/api.md',
    curl: true,
    baseUrl: 'https://workmail.us-east-1.amazonaws.com',
  },
})
