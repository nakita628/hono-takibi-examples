import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/organizations/2016-11-28/openapi.yaml',
  output: './src/organizations/routes.ts',
  template: {},
  type: { output: './src/organizations/types.ts' },
  client: { output: './src/organizations/client.ts', baseUrl: '/' },
  rpc: { output: './src/organizations/rpc.ts', parseResponse: true },
  swr: { output: './src/organizations/hooks/swr.ts' },
  'tanstack-query': { output: './src/organizations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/organizations/hooks/preact-query.ts' },
  'solid-query': { output: './src/organizations/hooks/solid-query.ts' },
  'vue-query': { output: './src/organizations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/organizations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/organizations/hooks/angular-query.ts' },
  docs: {
    output: './src/organizations/api.md',
    curl: true,
    baseUrl: 'https://organizations.us-east-1.amazonaws.com',
  },
})
