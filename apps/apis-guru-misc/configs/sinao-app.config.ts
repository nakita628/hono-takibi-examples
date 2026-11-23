import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sinao.app/1.1.0/openapi.yaml',
  output: './src/sinao-app/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sinao-app/types.ts' },
  client: { output: './src/sinao-app/client.ts', baseUrl: '/' },
  rpc: { output: './src/sinao-app/rpc.ts', parseResponse: true },
  swr: { output: './src/sinao-app/hooks/swr.ts' },
  'tanstack-query': { output: './src/sinao-app/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sinao-app/hooks/preact-query.ts' },
  'solid-query': { output: './src/sinao-app/hooks/solid-query.ts' },
  'vue-query': { output: './src/sinao-app/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sinao-app/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sinao-app/hooks/angular-query.ts' },
  docs: {
    output: './src/sinao-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
