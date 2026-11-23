import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getemailinfo/1.0.0/openapi.yaml',
  output: './src/getemailinfo/routes.ts',
  template: {},
  type: { output: './src/getemailinfo/types.ts' },
  client: { output: './src/getemailinfo/client.ts', baseUrl: '/' },
  rpc: { output: './src/getemailinfo/rpc.ts', parseResponse: true },
  swr: { output: './src/getemailinfo/hooks/swr.ts' },
  'tanstack-query': { output: './src/getemailinfo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getemailinfo/hooks/preact-query.ts' },
  'solid-query': { output: './src/getemailinfo/hooks/solid-query.ts' },
  'vue-query': { output: './src/getemailinfo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getemailinfo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getemailinfo/hooks/angular-query.ts' },
  docs: {
    output: './src/getemailinfo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
