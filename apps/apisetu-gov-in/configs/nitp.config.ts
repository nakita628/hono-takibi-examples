import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nitp/3.0.0/openapi.yaml',
  output: './src/nitp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nitp/types.ts' },
  client: { output: './src/nitp/client.ts', baseUrl: '/' },
  rpc: { output: './src/nitp/rpc.ts', parseResponse: true },
  swr: { output: './src/nitp/hooks/swr.ts' },
  'tanstack-query': { output: './src/nitp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nitp/hooks/preact-query.ts' },
  'solid-query': { output: './src/nitp/hooks/solid-query.ts' },
  'vue-query': { output: './src/nitp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nitp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nitp/hooks/angular-query.ts' },
  docs: {
    output: './src/nitp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
