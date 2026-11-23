import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adsense/v1.4/openapi.yaml',
  output: './src/adsense/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/adsense/types.ts' },
  client: { output: './src/adsense/client.ts', baseUrl: '/' },
  rpc: { output: './src/adsense/rpc.ts', parseResponse: true },
  swr: { output: './src/adsense/hooks/swr.ts' },
  'tanstack-query': { output: './src/adsense/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adsense/hooks/preact-query.ts' },
  'solid-query': { output: './src/adsense/hooks/solid-query.ts' },
  'vue-query': { output: './src/adsense/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adsense/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adsense/hooks/angular-query.ts' },
  docs: {
    output: './src/adsense/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
