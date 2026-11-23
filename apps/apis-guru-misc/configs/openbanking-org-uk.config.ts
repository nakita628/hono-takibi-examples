import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/v1.3/openapi.yaml',
  output: './src/openbanking-org-uk/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openbanking-org-uk/types.ts' },
  client: { output: './src/openbanking-org-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/openbanking-org-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/openbanking-org-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/openbanking-org-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openbanking-org-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/openbanking-org-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/openbanking-org-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openbanking-org-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openbanking-org-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/openbanking-org-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
