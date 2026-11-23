import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nasa.gov/asteroids neows/3.4.0/openapi.yaml',
  output: './src/nasa-gov-asteroids-neows/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nasa-gov-asteroids-neows/types.ts' },
  client: { output: './src/nasa-gov-asteroids-neows/client.ts', baseUrl: '/' },
  rpc: { output: './src/nasa-gov-asteroids-neows/rpc.ts', parseResponse: true },
  swr: { output: './src/nasa-gov-asteroids-neows/hooks/swr.ts' },
  'tanstack-query': { output: './src/nasa-gov-asteroids-neows/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nasa-gov-asteroids-neows/hooks/preact-query.ts' },
  'solid-query': { output: './src/nasa-gov-asteroids-neows/hooks/solid-query.ts' },
  'vue-query': { output: './src/nasa-gov-asteroids-neows/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nasa-gov-asteroids-neows/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nasa-gov-asteroids-neows/hooks/angular-query.ts' },
  docs: {
    output: './src/nasa-gov-asteroids-neows/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
