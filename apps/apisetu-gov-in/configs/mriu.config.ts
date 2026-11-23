import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mriu/3.0.0/openapi.yaml',
  output: './src/mriu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mriu/types.ts' },
  client: { output: './src/mriu/client.ts', baseUrl: '/' },
  rpc: { output: './src/mriu/rpc.ts', parseResponse: true },
  swr: { output: './src/mriu/hooks/swr.ts' },
  'tanstack-query': { output: './src/mriu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mriu/hooks/preact-query.ts' },
  'solid-query': { output: './src/mriu/hooks/solid-query.ts' },
  'vue-query': { output: './src/mriu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mriu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mriu/hooks/angular-query.ts' },
  docs: {
    output: './src/mriu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
