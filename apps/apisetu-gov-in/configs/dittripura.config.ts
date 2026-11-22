import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dittripura/3.0.0/openapi.yaml',
  output: './src/dittripura/routes.ts',
  template: {},
  type: { output: './src/dittripura/types.ts' },
  client: { output: './src/dittripura/client.ts', baseUrl: '/' },
  rpc: { output: './src/dittripura/rpc.ts', parseResponse: true },
  swr: { output: './src/dittripura/hooks/swr.ts' },
  'tanstack-query': { output: './src/dittripura/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dittripura/hooks/preact-query.ts' },
  'solid-query': { output: './src/dittripura/hooks/solid-query.ts' },
  'vue-query': { output: './src/dittripura/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dittripura/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dittripura/hooks/angular-query.ts' },
  docs: {
    output: './src/dittripura/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
