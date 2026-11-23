import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Session-Manager-API/1.0/openapi.yaml',
  output: './src/session-manager-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/session-manager-api/types.ts' },
  client: { output: './src/session-manager-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/session-manager-api/rpc.ts', parseResponse: true },
  swr: { output: './src/session-manager-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/session-manager-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/session-manager-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/session-manager-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/session-manager-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/session-manager-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/session-manager-api/hooks/angular-query.ts' },
  docs: {
    output: './src/session-manager-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
