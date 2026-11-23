import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-hiu/0.5/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-hiu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ndhm-gov-in-ndhm-hiu/types.ts' },
  client: { output: './src/ndhm-gov-in-ndhm-hiu/client.ts', baseUrl: '/' },
  rpc: { output: './src/ndhm-gov-in-ndhm-hiu/rpc.ts', parseResponse: true },
  swr: { output: './src/ndhm-gov-in-ndhm-hiu/hooks/swr.ts' },
  'tanstack-query': { output: './src/ndhm-gov-in-ndhm-hiu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ndhm-gov-in-ndhm-hiu/hooks/preact-query.ts' },
  'solid-query': { output: './src/ndhm-gov-in-ndhm-hiu/hooks/solid-query.ts' },
  'vue-query': { output: './src/ndhm-gov-in-ndhm-hiu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ndhm-gov-in-ndhm-hiu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ndhm-gov-in-ndhm-hiu/hooks/angular-query.ts' },
  docs: {
    output: './src/ndhm-gov-in-ndhm-hiu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
