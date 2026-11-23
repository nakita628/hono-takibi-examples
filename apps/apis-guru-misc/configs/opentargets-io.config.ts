import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/opentargets.io/19.02.1/openapi.yaml',
  output: './src/opentargets-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/opentargets-io/types.ts' },
  client: { output: './src/opentargets-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/opentargets-io/rpc.ts', parseResponse: true },
  swr: { output: './src/opentargets-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/opentargets-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/opentargets-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/opentargets-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/opentargets-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/opentargets-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/opentargets-io/hooks/angular-query.ts' },
  docs: {
    output: './src/opentargets-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
