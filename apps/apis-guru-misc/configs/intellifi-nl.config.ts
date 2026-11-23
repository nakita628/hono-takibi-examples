import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/intellifi.nl/2.23.2+0.gfbc3926.dirty/openapi.yaml',
  output: './src/intellifi-nl/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/intellifi-nl/types.ts' },
  client: { output: './src/intellifi-nl/client.ts', baseUrl: '/' },
  rpc: { output: './src/intellifi-nl/rpc.ts', parseResponse: true },
  swr: { output: './src/intellifi-nl/hooks/swr.ts' },
  'tanstack-query': { output: './src/intellifi-nl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/intellifi-nl/hooks/preact-query.ts' },
  'solid-query': { output: './src/intellifi-nl/hooks/solid-query.ts' },
  'vue-query': { output: './src/intellifi-nl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/intellifi-nl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/intellifi-nl/hooks/angular-query.ts' },
  docs: {
    output: './src/intellifi-nl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
