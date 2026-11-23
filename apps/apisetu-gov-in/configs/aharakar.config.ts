import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aharakar/3.0.0/openapi.yaml',
  output: './src/aharakar/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/aharakar/types.ts' },
  client: { output: './src/aharakar/client.ts', baseUrl: '/' },
  rpc: { output: './src/aharakar/rpc.ts', parseResponse: true },
  swr: { output: './src/aharakar/hooks/swr.ts' },
  'tanstack-query': { output: './src/aharakar/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aharakar/hooks/preact-query.ts' },
  'solid-query': { output: './src/aharakar/hooks/solid-query.ts' },
  'vue-query': { output: './src/aharakar/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aharakar/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aharakar/hooks/angular-query.ts' },
  docs: {
    output: './src/aharakar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
