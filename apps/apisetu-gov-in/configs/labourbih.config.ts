import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/labourbih/3.0.0/openapi.yaml',
  output: './src/labourbih/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/labourbih/types.ts' },
  client: { output: './src/labourbih/client.ts', baseUrl: '/' },
  rpc: { output: './src/labourbih/rpc.ts', parseResponse: true },
  swr: { output: './src/labourbih/hooks/swr.ts' },
  'tanstack-query': { output: './src/labourbih/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/labourbih/hooks/preact-query.ts' },
  'solid-query': { output: './src/labourbih/hooks/solid-query.ts' },
  'vue-query': { output: './src/labourbih/hooks/vue-query.ts' },
  'svelte-query': { output: './src/labourbih/hooks/svelte-query.ts' },
  'angular-query': { output: './src/labourbih/hooks/angular-query.ts' },
  docs: {
    output: './src/labourbih/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
