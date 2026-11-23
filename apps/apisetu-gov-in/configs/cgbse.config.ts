import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cgbse/3.0.0/openapi.yaml',
  output: './src/cgbse/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cgbse/types.ts' },
  client: { output: './src/cgbse/client.ts', baseUrl: '/' },
  rpc: { output: './src/cgbse/rpc.ts', parseResponse: true },
  swr: { output: './src/cgbse/hooks/swr.ts' },
  'tanstack-query': { output: './src/cgbse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cgbse/hooks/preact-query.ts' },
  'solid-query': { output: './src/cgbse/hooks/solid-query.ts' },
  'vue-query': { output: './src/cgbse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cgbse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cgbse/hooks/angular-query.ts' },
  docs: {
    output: './src/cgbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
