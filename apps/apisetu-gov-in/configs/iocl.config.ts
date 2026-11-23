import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/iocl/3.0.0/openapi.yaml',
  output: './src/iocl/routes.ts',
  template: {},
  type: { output: './src/iocl/types.ts' },
  client: { output: './src/iocl/client.ts', baseUrl: '/' },
  rpc: { output: './src/iocl/rpc.ts', parseResponse: true },
  swr: { output: './src/iocl/hooks/swr.ts' },
  'tanstack-query': { output: './src/iocl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iocl/hooks/preact-query.ts' },
  'solid-query': { output: './src/iocl/hooks/solid-query.ts' },
  'vue-query': { output: './src/iocl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iocl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iocl/hooks/angular-query.ts' },
  docs: {
    output: './src/iocl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
