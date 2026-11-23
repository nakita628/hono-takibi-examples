import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/gwells/v1/openapi.yaml',
  output: './src/gwells/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gwells/types.ts' },
  client: { output: './src/gwells/client.ts', baseUrl: '/' },
  rpc: { output: './src/gwells/rpc.ts', parseResponse: true },
  swr: { output: './src/gwells/hooks/swr.ts' },
  'tanstack-query': { output: './src/gwells/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gwells/hooks/preact-query.ts' },
  'solid-query': { output: './src/gwells/hooks/solid-query.ts' },
  'vue-query': { output: './src/gwells/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gwells/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gwells/hooks/angular-query.ts' },
  docs: {
    output: './src/gwells/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
