import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportap/3.0.0/openapi.yaml',
  output: './src/transportap/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportap/types.ts' },
  client: { output: './src/transportap/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportap/rpc.ts', parseResponse: true },
  swr: { output: './src/transportap/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportap/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportap/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportap/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportap/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportap/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportap/hooks/angular-query.ts' },
  docs: {
    output: './src/transportap/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
