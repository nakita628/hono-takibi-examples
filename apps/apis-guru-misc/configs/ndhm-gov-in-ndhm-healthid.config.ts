import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-healthid/1.0/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-healthid/routes.ts',
  template: {},
  type: { output: './src/ndhm-gov-in-ndhm-healthid/types.ts' },
  client: { output: './src/ndhm-gov-in-ndhm-healthid/client.ts', baseUrl: '/' },
  rpc: { output: './src/ndhm-gov-in-ndhm-healthid/rpc.ts', parseResponse: true },
  swr: { output: './src/ndhm-gov-in-ndhm-healthid/hooks/swr.ts' },
  'tanstack-query': { output: './src/ndhm-gov-in-ndhm-healthid/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ndhm-gov-in-ndhm-healthid/hooks/preact-query.ts' },
  'solid-query': { output: './src/ndhm-gov-in-ndhm-healthid/hooks/solid-query.ts' },
  'vue-query': { output: './src/ndhm-gov-in-ndhm-healthid/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ndhm-gov-in-ndhm-healthid/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ndhm-gov-in-ndhm-healthid/hooks/angular-query.ts' },
  docs: {
    output: './src/ndhm-gov-in-ndhm-healthid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
