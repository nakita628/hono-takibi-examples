import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportjh/3.0.0/openapi.yaml',
  output: './src/transportjh/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportjh/types.ts' },
  client: { output: './src/transportjh/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportjh/rpc.ts', parseResponse: true },
  swr: { output: './src/transportjh/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportjh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportjh/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportjh/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportjh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportjh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportjh/hooks/angular-query.ts' },
  docs: {
    output: './src/transportjh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
