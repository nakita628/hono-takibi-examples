import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/randommer.io/v1/openapi.yaml',
  output: './src/randommer-io/routes.ts',
  template: {},
  type: { output: './src/randommer-io/types.ts' },
  client: { output: './src/randommer-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/randommer-io/rpc.ts', parseResponse: true },
  swr: { output: './src/randommer-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/randommer-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/randommer-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/randommer-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/randommer-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/randommer-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/randommer-io/hooks/angular-query.ts' },
  docs: {
    output: './src/randommer-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
