import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/bcdc/3.0.1/openapi.yaml',
  output: './src/bcdc/routes.ts',
  template: {},
  type: { output: './src/bcdc/types.ts' },
  client: { output: './src/bcdc/client.ts', baseUrl: '/' },
  rpc: { output: './src/bcdc/rpc.ts', parseResponse: true },
  swr: { output: './src/bcdc/hooks/swr.ts' },
  'tanstack-query': { output: './src/bcdc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bcdc/hooks/preact-query.ts' },
  'solid-query': { output: './src/bcdc/hooks/solid-query.ts' },
  'vue-query': { output: './src/bcdc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bcdc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bcdc/hooks/angular-query.ts' },
  docs: {
    output: './src/bcdc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
