import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpsssb/3.0.0/openapi.yaml',
  output: './src/hpsssb/routes.ts',
  template: {},
  type: { output: './src/hpsssb/types.ts' },
  client: { output: './src/hpsssb/client.ts', baseUrl: '/' },
  rpc: { output: './src/hpsssb/rpc.ts', parseResponse: true },
  swr: { output: './src/hpsssb/hooks/swr.ts' },
  'tanstack-query': { output: './src/hpsssb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hpsssb/hooks/preact-query.ts' },
  'solid-query': { output: './src/hpsssb/hooks/solid-query.ts' },
  'vue-query': { output: './src/hpsssb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hpsssb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hpsssb/hooks/angular-query.ts' },
  docs: {
    output: './src/hpsssb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
