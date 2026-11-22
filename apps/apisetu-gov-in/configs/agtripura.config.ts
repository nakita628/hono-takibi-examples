import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/agtripura/3.0.0/openapi.yaml',
  output: './src/agtripura/routes.ts',
  template: {},
  type: { output: './src/agtripura/types.ts' },
  client: { output: './src/agtripura/client.ts', baseUrl: '/' },
  rpc: { output: './src/agtripura/rpc.ts', parseResponse: true },
  swr: { output: './src/agtripura/hooks/swr.ts' },
  'tanstack-query': { output: './src/agtripura/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/agtripura/hooks/preact-query.ts' },
  'solid-query': { output: './src/agtripura/hooks/solid-query.ts' },
  'vue-query': { output: './src/agtripura/hooks/vue-query.ts' },
  'svelte-query': { output: './src/agtripura/hooks/svelte-query.ts' },
  'angular-query': { output: './src/agtripura/hooks/angular-query.ts' },
  docs: {
    output: './src/agtripura/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
