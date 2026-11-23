import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/civilsupplieskerala/3.0.0/openapi.yaml',
  output: './src/civilsupplieskerala/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/civilsupplieskerala/types.ts' },
  client: { output: './src/civilsupplieskerala/client.ts', baseUrl: '/' },
  rpc: { output: './src/civilsupplieskerala/rpc.ts', parseResponse: true },
  swr: { output: './src/civilsupplieskerala/hooks/swr.ts' },
  'tanstack-query': { output: './src/civilsupplieskerala/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/civilsupplieskerala/hooks/preact-query.ts' },
  'solid-query': { output: './src/civilsupplieskerala/hooks/solid-query.ts' },
  'vue-query': { output: './src/civilsupplieskerala/hooks/vue-query.ts' },
  'svelte-query': { output: './src/civilsupplieskerala/hooks/svelte-query.ts' },
  'angular-query': { output: './src/civilsupplieskerala/hooks/angular-query.ts' },
  docs: {
    output: './src/civilsupplieskerala/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
