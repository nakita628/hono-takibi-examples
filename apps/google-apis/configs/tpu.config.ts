import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/tpu/v2/openapi.yaml',
  output: './src/tpu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/tpu/types.ts' },
  client: { output: './src/tpu/client.ts', baseUrl: '/' },
  rpc: { output: './src/tpu/rpc.ts', parseResponse: true },
  swr: { output: './src/tpu/hooks/swr.ts' },
  'tanstack-query': { output: './src/tpu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tpu/hooks/preact-query.ts' },
  'solid-query': { output: './src/tpu/hooks/solid-query.ts' },
  'vue-query': { output: './src/tpu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tpu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tpu/hooks/angular-query.ts' },
  docs: {
    output: './src/tpu/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
