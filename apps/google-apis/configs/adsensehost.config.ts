import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adsensehost/v4.1/openapi.yaml',
  output: './src/adsensehost/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/adsensehost/types.ts' },
  client: { output: './src/adsensehost/client.ts', baseUrl: '/' },
  rpc: { output: './src/adsensehost/rpc.ts', parseResponse: true },
  swr: { output: './src/adsensehost/hooks/swr.ts' },
  'tanstack-query': { output: './src/adsensehost/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adsensehost/hooks/preact-query.ts' },
  'solid-query': { output: './src/adsensehost/hooks/solid-query.ts' },
  'vue-query': { output: './src/adsensehost/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adsensehost/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adsensehost/hooks/angular-query.ts' },
  docs: {
    output: './src/adsensehost/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
