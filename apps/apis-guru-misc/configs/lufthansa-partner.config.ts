import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lufthansa.com/partner/1.0/openapi.yaml',
  output: './src/lufthansa-partner/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lufthansa-partner/types.ts' },
  client: { output: './src/lufthansa-partner/client.ts', baseUrl: '/' },
  rpc: { output: './src/lufthansa-partner/rpc.ts', parseResponse: true },
  swr: { output: './src/lufthansa-partner/hooks/swr.ts' },
  'tanstack-query': { output: './src/lufthansa-partner/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lufthansa-partner/hooks/preact-query.ts' },
  'solid-query': { output: './src/lufthansa-partner/hooks/solid-query.ts' },
  'vue-query': { output: './src/lufthansa-partner/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lufthansa-partner/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lufthansa-partner/hooks/angular-query.ts' },
  docs: {
    output: './src/lufthansa-partner/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
