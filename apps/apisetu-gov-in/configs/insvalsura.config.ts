import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/insvalsura/3.0.0/openapi.yaml',
  output: './src/insvalsura/routes.ts',
  template: {},
  type: { output: './src/insvalsura/types.ts' },
  client: { output: './src/insvalsura/client.ts', baseUrl: '/' },
  rpc: { output: './src/insvalsura/rpc.ts', parseResponse: true },
  swr: { output: './src/insvalsura/hooks/swr.ts' },
  'tanstack-query': { output: './src/insvalsura/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/insvalsura/hooks/preact-query.ts' },
  'solid-query': { output: './src/insvalsura/hooks/solid-query.ts' },
  'vue-query': { output: './src/insvalsura/hooks/vue-query.ts' },
  'svelte-query': { output: './src/insvalsura/hooks/svelte-query.ts' },
  'angular-query': { output: './src/insvalsura/hooks/angular-query.ts' },
  docs: {
    output: './src/insvalsura/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
