import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tfl.gov.uk/v1/openapi.yaml',
  output: './src/tfl-gov-uk/routes.ts',
  template: {},
  type: { output: './src/tfl-gov-uk/types.ts' },
  client: { output: './src/tfl-gov-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/tfl-gov-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/tfl-gov-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/tfl-gov-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tfl-gov-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/tfl-gov-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/tfl-gov-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tfl-gov-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tfl-gov-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/tfl-gov-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
