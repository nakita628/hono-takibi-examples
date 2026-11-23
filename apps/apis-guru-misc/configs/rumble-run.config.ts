import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rumble.run/2.15.0/openapi.yaml',
  output: './src/rumble-run/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/rumble-run/types.ts' },
  client: { output: './src/rumble-run/client.ts', baseUrl: '/' },
  rpc: { output: './src/rumble-run/rpc.ts', parseResponse: true },
  swr: { output: './src/rumble-run/hooks/swr.ts' },
  'tanstack-query': { output: './src/rumble-run/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rumble-run/hooks/preact-query.ts' },
  'solid-query': { output: './src/rumble-run/hooks/solid-query.ts' },
  'vue-query': { output: './src/rumble-run/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rumble-run/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rumble-run/hooks/angular-query.ts' },
  docs: {
    output: './src/rumble-run/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
