import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/digitalassetlinks/v1/openapi.yaml',
  output: './src/digitalassetlinks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/digitalassetlinks/types.ts' },
  client: { output: './src/digitalassetlinks/client.ts', baseUrl: '/' },
  rpc: { output: './src/digitalassetlinks/rpc.ts', parseResponse: true },
  swr: { output: './src/digitalassetlinks/hooks/swr.ts' },
  'tanstack-query': { output: './src/digitalassetlinks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/digitalassetlinks/hooks/preact-query.ts' },
  'solid-query': { output: './src/digitalassetlinks/hooks/solid-query.ts' },
  'vue-query': { output: './src/digitalassetlinks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/digitalassetlinks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/digitalassetlinks/hooks/angular-query.ts' },
  docs: {
    output: './src/digitalassetlinks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
