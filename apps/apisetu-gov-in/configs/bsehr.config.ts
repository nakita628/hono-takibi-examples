import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bsehr/3.0.0/openapi.yaml',
  output: './src/bsehr/routes.ts',
  template: {},
  type: { output: './src/bsehr/types.ts' },
  client: { output: './src/bsehr/client.ts', baseUrl: '/' },
  rpc: { output: './src/bsehr/rpc.ts', parseResponse: true },
  swr: { output: './src/bsehr/hooks/swr.ts' },
  'tanstack-query': { output: './src/bsehr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bsehr/hooks/preact-query.ts' },
  'solid-query': { output: './src/bsehr/hooks/solid-query.ts' },
  'vue-query': { output: './src/bsehr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bsehr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bsehr/hooks/angular-query.ts' },
  docs: {
    output: './src/bsehr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
