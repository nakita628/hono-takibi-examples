import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/greengrassv2/2020-11-30/openapi.yaml',
  output: './src/greengrassv2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/greengrassv2/types.ts' },
  client: { output: './src/greengrassv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/greengrassv2/rpc.ts', parseResponse: true },
  swr: { output: './src/greengrassv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/greengrassv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/greengrassv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/greengrassv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/greengrassv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/greengrassv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/greengrassv2/hooks/angular-query.ts' },
  docs: {
    output: './src/greengrassv2/api.md',
    curl: true,
    baseUrl: 'https://greengrassv2.us-east-1.amazonaws.com',
  },
})
