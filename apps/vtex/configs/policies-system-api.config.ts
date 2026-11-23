import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Policies-System-API/1.0.0/openapi.yaml',
  output: './src/policies-system-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/policies-system-api/types.ts' },
  client: { output: './src/policies-system-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/policies-system-api/rpc.ts', parseResponse: true },
  swr: { output: './src/policies-system-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/policies-system-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/policies-system-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/policies-system-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/policies-system-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/policies-system-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/policies-system-api/hooks/angular-query.ts' },
  docs: {
    output: './src/policies-system-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
