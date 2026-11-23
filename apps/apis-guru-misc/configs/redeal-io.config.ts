import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redeal.io/1.0.0/openapi.yaml',
  output: './src/redeal-io/routes.ts',
  template: {},
  type: { output: './src/redeal-io/types.ts' },
  client: { output: './src/redeal-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/redeal-io/rpc.ts', parseResponse: true },
  swr: { output: './src/redeal-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/redeal-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redeal-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/redeal-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/redeal-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redeal-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redeal-io/hooks/angular-query.ts' },
  docs: {
    output: './src/redeal-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
