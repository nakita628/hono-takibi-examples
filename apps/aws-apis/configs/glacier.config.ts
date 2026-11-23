import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/glacier/2012-06-01/openapi.yaml',
  output: './src/glacier/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/glacier/types.ts' },
  client: { output: './src/glacier/client.ts', baseUrl: '/' },
  rpc: { output: './src/glacier/rpc.ts', parseResponse: true },
  swr: { output: './src/glacier/hooks/swr.ts' },
  'tanstack-query': { output: './src/glacier/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/glacier/hooks/preact-query.ts' },
  'solid-query': { output: './src/glacier/hooks/solid-query.ts' },
  'vue-query': { output: './src/glacier/hooks/vue-query.ts' },
  'svelte-query': { output: './src/glacier/hooks/svelte-query.ts' },
  'angular-query': { output: './src/glacier/hooks/angular-query.ts' },
  docs: {
    output: './src/glacier/api.md',
    curl: true,
    baseUrl: 'https://glacier.us-east-1.amazonaws.com',
  },
})
