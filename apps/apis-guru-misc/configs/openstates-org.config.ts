import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openstates.org/2021.11.12/openapi.yaml',
  output: './src/openstates-org/routes.ts',
  template: {},
  type: { output: './src/openstates-org/types.ts' },
  client: { output: './src/openstates-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/openstates-org/rpc.ts', parseResponse: true },
  swr: { output: './src/openstates-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/openstates-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openstates-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/openstates-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/openstates-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openstates-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openstates-org/hooks/angular-query.ts' },
  docs: {
    output: './src/openstates-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
