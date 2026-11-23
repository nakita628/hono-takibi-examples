import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-gateway/0.5/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-gateway/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ndhm-gov-in-ndhm-gateway/types.ts' },
  client: { output: './src/ndhm-gov-in-ndhm-gateway/client.ts', baseUrl: '/' },
  rpc: { output: './src/ndhm-gov-in-ndhm-gateway/rpc.ts', parseResponse: true },
  swr: { output: './src/ndhm-gov-in-ndhm-gateway/hooks/swr.ts' },
  'tanstack-query': { output: './src/ndhm-gov-in-ndhm-gateway/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ndhm-gov-in-ndhm-gateway/hooks/preact-query.ts' },
  'solid-query': { output: './src/ndhm-gov-in-ndhm-gateway/hooks/solid-query.ts' },
  'vue-query': { output: './src/ndhm-gov-in-ndhm-gateway/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ndhm-gov-in-ndhm-gateway/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ndhm-gov-in-ndhm-gateway/hooks/angular-query.ts' },
  docs: {
    output: './src/ndhm-gov-in-ndhm-gateway/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
