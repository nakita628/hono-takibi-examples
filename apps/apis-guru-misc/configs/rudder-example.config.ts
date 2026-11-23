import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rudder.example.local/16/openapi.yaml',
  output: './src/rudder-example/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/rudder-example/types.ts' },
  client: { output: './src/rudder-example/client.ts', baseUrl: '/' },
  rpc: { output: './src/rudder-example/rpc.ts', parseResponse: true },
  swr: { output: './src/rudder-example/hooks/swr.ts' },
  'tanstack-query': { output: './src/rudder-example/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rudder-example/hooks/preact-query.ts' },
  'solid-query': { output: './src/rudder-example/hooks/solid-query.ts' },
  'vue-query': { output: './src/rudder-example/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rudder-example/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rudder-example/hooks/angular-query.ts' },
  docs: {
    output: './src/rudder-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
