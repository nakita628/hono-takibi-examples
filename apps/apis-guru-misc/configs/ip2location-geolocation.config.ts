import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2location.com/geolocation/1.0/openapi.yaml',
  output: './src/ip2location-geolocation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ip2location-geolocation/types.ts' },
  client: { output: './src/ip2location-geolocation/client.ts', baseUrl: '/' },
  rpc: { output: './src/ip2location-geolocation/rpc.ts', parseResponse: true },
  swr: { output: './src/ip2location-geolocation/hooks/swr.ts' },
  'tanstack-query': { output: './src/ip2location-geolocation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ip2location-geolocation/hooks/preact-query.ts' },
  'solid-query': { output: './src/ip2location-geolocation/hooks/solid-query.ts' },
  'vue-query': { output: './src/ip2location-geolocation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ip2location-geolocation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ip2location-geolocation/hooks/angular-query.ts' },
  docs: {
    output: './src/ip2location-geolocation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
