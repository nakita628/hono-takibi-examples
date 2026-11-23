import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/abstractapi.com/geolocation/1.0.0/openapi.yaml',
  output: './src/abstractapi-geolocation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/abstractapi-geolocation/types.ts' },
  client: { output: './src/abstractapi-geolocation/client.ts', baseUrl: '/' },
  rpc: { output: './src/abstractapi-geolocation/rpc.ts', parseResponse: true },
  swr: { output: './src/abstractapi-geolocation/hooks/swr.ts' },
  'tanstack-query': { output: './src/abstractapi-geolocation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/abstractapi-geolocation/hooks/preact-query.ts' },
  'solid-query': { output: './src/abstractapi-geolocation/hooks/solid-query.ts' },
  'vue-query': { output: './src/abstractapi-geolocation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/abstractapi-geolocation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/abstractapi-geolocation/hooks/angular-query.ts' },
  docs: {
    output: './src/abstractapi-geolocation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
