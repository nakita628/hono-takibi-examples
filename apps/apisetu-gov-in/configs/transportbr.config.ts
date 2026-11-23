import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportbr/3.0.0/openapi.yaml',
  output: './src/transportbr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportbr/types.ts' },
  client: { output: './src/transportbr/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportbr/rpc.ts', parseResponse: true },
  swr: { output: './src/transportbr/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportbr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportbr/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportbr/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportbr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportbr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportbr/hooks/angular-query.ts' },
  docs: {
    output: './src/transportbr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
