import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistricthp/3.0.0/openapi.yaml',
  output: './src/edistricthp/routes.ts',
  template: {},
  type: { output: './src/edistricthp/types.ts' },
  client: { output: './src/edistricthp/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistricthp/rpc.ts', parseResponse: true },
  swr: { output: './src/edistricthp/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistricthp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistricthp/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistricthp/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistricthp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistricthp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistricthp/hooks/angular-query.ts' },
  docs: {
    output: './src/edistricthp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
