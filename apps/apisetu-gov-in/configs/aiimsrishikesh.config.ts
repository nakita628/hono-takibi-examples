import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aiimsrishikesh/3.0.0/openapi.yaml',
  output: './src/aiimsrishikesh/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/aiimsrishikesh/types.ts' },
  client: { output: './src/aiimsrishikesh/client.ts', baseUrl: '/' },
  rpc: { output: './src/aiimsrishikesh/rpc.ts', parseResponse: true },
  swr: { output: './src/aiimsrishikesh/hooks/swr.ts' },
  'tanstack-query': { output: './src/aiimsrishikesh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aiimsrishikesh/hooks/preact-query.ts' },
  'solid-query': { output: './src/aiimsrishikesh/hooks/solid-query.ts' },
  'vue-query': { output: './src/aiimsrishikesh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aiimsrishikesh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aiimsrishikesh/hooks/angular-query.ts' },
  docs: {
    output: './src/aiimsrishikesh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
