import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ato.gov.au/0.0.6/openapi.yaml',
  output: './src/ato-gov-au/routes.ts',
  template: {},
  type: { output: './src/ato-gov-au/types.ts' },
  client: { output: './src/ato-gov-au/client.ts', baseUrl: '/' },
  rpc: { output: './src/ato-gov-au/rpc.ts', parseResponse: true },
  swr: { output: './src/ato-gov-au/hooks/swr.ts' },
  'tanstack-query': { output: './src/ato-gov-au/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ato-gov-au/hooks/preact-query.ts' },
  'solid-query': { output: './src/ato-gov-au/hooks/solid-query.ts' },
  'vue-query': { output: './src/ato-gov-au/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ato-gov-au/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ato-gov-au/hooks/angular-query.ts' },
  docs: {
    output: './src/ato-gov-au/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
