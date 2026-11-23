import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gameservices/v1/openapi.yaml',
  output: './src/gameservices/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gameservices/types.ts' },
  client: { output: './src/gameservices/client.ts', baseUrl: '/' },
  rpc: { output: './src/gameservices/rpc.ts', parseResponse: true },
  swr: { output: './src/gameservices/hooks/swr.ts' },
  'tanstack-query': { output: './src/gameservices/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gameservices/hooks/preact-query.ts' },
  'solid-query': { output: './src/gameservices/hooks/solid-query.ts' },
  'vue-query': { output: './src/gameservices/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gameservices/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gameservices/hooks/angular-query.ts' },
  docs: {
    output: './src/gameservices/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
