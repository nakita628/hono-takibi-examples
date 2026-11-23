import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/accesscontextmanager/v1beta/openapi.yaml',
  output: './src/accesscontextmanager/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/accesscontextmanager/types.ts' },
  client: { output: './src/accesscontextmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/accesscontextmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/accesscontextmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/accesscontextmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/accesscontextmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/accesscontextmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/accesscontextmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/accesscontextmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/accesscontextmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/accesscontextmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
