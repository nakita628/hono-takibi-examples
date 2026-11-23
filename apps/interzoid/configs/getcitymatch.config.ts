import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcitymatch/1.0.0/openapi.yaml',
  output: './src/getcitymatch/routes.ts',
  template: {},
  type: { output: './src/getcitymatch/types.ts' },
  client: { output: './src/getcitymatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/getcitymatch/rpc.ts', parseResponse: true },
  swr: { output: './src/getcitymatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/getcitymatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getcitymatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/getcitymatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/getcitymatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getcitymatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getcitymatch/hooks/angular-query.ts' },
  docs: {
    output: './src/getcitymatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
