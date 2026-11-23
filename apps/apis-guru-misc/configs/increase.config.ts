import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/increase.com/0.0.1/openapi.yaml',
  output: './src/increase/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/increase/types.ts' },
  client: { output: './src/increase/client.ts', baseUrl: '/' },
  rpc: { output: './src/increase/rpc.ts', parseResponse: true },
  swr: { output: './src/increase/hooks/swr.ts' },
  'tanstack-query': { output: './src/increase/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/increase/hooks/preact-query.ts' },
  'solid-query': { output: './src/increase/hooks/solid-query.ts' },
  'vue-query': { output: './src/increase/hooks/vue-query.ts' },
  'svelte-query': { output: './src/increase/hooks/svelte-query.ts' },
  'angular-query': { output: './src/increase/hooks/angular-query.ts' },
  docs: {
    output: './src/increase/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
