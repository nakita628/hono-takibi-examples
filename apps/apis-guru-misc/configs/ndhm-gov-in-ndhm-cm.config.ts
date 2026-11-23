import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-cm/0.5/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-cm/routes.ts',
  template: {},
  type: { output: './src/ndhm-gov-in-ndhm-cm/types.ts' },
  client: { output: './src/ndhm-gov-in-ndhm-cm/client.ts', baseUrl: '/' },
  rpc: { output: './src/ndhm-gov-in-ndhm-cm/rpc.ts', parseResponse: true },
  swr: { output: './src/ndhm-gov-in-ndhm-cm/hooks/swr.ts' },
  'tanstack-query': { output: './src/ndhm-gov-in-ndhm-cm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ndhm-gov-in-ndhm-cm/hooks/preact-query.ts' },
  'solid-query': { output: './src/ndhm-gov-in-ndhm-cm/hooks/solid-query.ts' },
  'vue-query': { output: './src/ndhm-gov-in-ndhm-cm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ndhm-gov-in-ndhm-cm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ndhm-gov-in-ndhm-cm/hooks/angular-query.ts' },
  docs: {
    output: './src/ndhm-gov-in-ndhm-cm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
