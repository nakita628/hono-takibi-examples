import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fec.gov/1.0/openapi.yaml',
  output: './src/fec-gov/routes.ts',
  template: {},
  type: { output: './src/fec-gov/types.ts' },
  client: { output: './src/fec-gov/client.ts', baseUrl: '/' },
  rpc: { output: './src/fec-gov/rpc.ts', parseResponse: true },
  swr: { output: './src/fec-gov/hooks/swr.ts' },
  'tanstack-query': { output: './src/fec-gov/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fec-gov/hooks/preact-query.ts' },
  'solid-query': { output: './src/fec-gov/hooks/solid-query.ts' },
  'vue-query': { output: './src/fec-gov/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fec-gov/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fec-gov/hooks/angular-query.ts' },
  docs: {
    output: './src/fec-gov/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
