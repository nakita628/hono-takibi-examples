import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/proton/2020-07-20/openapi.yaml',
  output: './src/proton/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/proton/types.ts' },
  client: { output: './src/proton/client.ts', baseUrl: '/' },
  rpc: { output: './src/proton/rpc.ts', parseResponse: true },
  swr: { output: './src/proton/hooks/swr.ts' },
  'tanstack-query': { output: './src/proton/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/proton/hooks/preact-query.ts' },
  'solid-query': { output: './src/proton/hooks/solid-query.ts' },
  'vue-query': { output: './src/proton/hooks/vue-query.ts' },
  'svelte-query': { output: './src/proton/hooks/svelte-query.ts' },
  'angular-query': { output: './src/proton/hooks/angular-query.ts' },
  docs: {
    output: './src/proton/api.md',
    curl: true,
    baseUrl: 'https://proton.us-east-1.amazonaws.com',
  },
})
