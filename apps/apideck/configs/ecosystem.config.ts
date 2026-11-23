import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/ecosystem/0.0.6/openapi.yaml',
  output: './src/ecosystem/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ecosystem/types.ts' },
  client: { output: './src/ecosystem/client.ts', baseUrl: '/' },
  rpc: { output: './src/ecosystem/rpc.ts', parseResponse: true },
  swr: { output: './src/ecosystem/hooks/swr.ts' },
  'tanstack-query': { output: './src/ecosystem/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ecosystem/hooks/preact-query.ts' },
  'solid-query': { output: './src/ecosystem/hooks/solid-query.ts' },
  'vue-query': { output: './src/ecosystem/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ecosystem/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ecosystem/hooks/angular-query.ts' },
  docs: {
    output: './src/ecosystem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
