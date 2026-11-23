import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/esgenterprise.com/1.0.0/openapi.yaml',
  output: './src/esgenterprise/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/esgenterprise/types.ts' },
  client: { output: './src/esgenterprise/client.ts', baseUrl: '/' },
  rpc: { output: './src/esgenterprise/rpc.ts', parseResponse: true },
  swr: { output: './src/esgenterprise/hooks/swr.ts' },
  'tanstack-query': { output: './src/esgenterprise/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/esgenterprise/hooks/preact-query.ts' },
  'solid-query': { output: './src/esgenterprise/hooks/solid-query.ts' },
  'vue-query': { output: './src/esgenterprise/hooks/vue-query.ts' },
  'svelte-query': { output: './src/esgenterprise/hooks/svelte-query.ts' },
  'angular-query': { output: './src/esgenterprise/hooks/angular-query.ts' },
  docs: {
    output: './src/esgenterprise/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
