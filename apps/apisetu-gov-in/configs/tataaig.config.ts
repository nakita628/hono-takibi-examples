import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/tataaig/3.0.0/openapi.yaml',
  output: './src/tataaig/routes.ts',
  template: {},
  type: { output: './src/tataaig/types.ts' },
  client: { output: './src/tataaig/client.ts', baseUrl: '/' },
  rpc: { output: './src/tataaig/rpc.ts', parseResponse: true },
  swr: { output: './src/tataaig/hooks/swr.ts' },
  'tanstack-query': { output: './src/tataaig/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tataaig/hooks/preact-query.ts' },
  'solid-query': { output: './src/tataaig/hooks/solid-query.ts' },
  'vue-query': { output: './src/tataaig/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tataaig/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tataaig/hooks/angular-query.ts' },
  docs: {
    output: './src/tataaig/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
