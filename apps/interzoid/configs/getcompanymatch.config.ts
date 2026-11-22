import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcompanymatch/1.0.0/openapi.yaml',
  output: './src/getcompanymatch/routes.ts',
  template: {},
  type: { output: './src/getcompanymatch/types.ts' },
  client: { output: './src/getcompanymatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/getcompanymatch/rpc.ts', parseResponse: true },
  swr: { output: './src/getcompanymatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/getcompanymatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getcompanymatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/getcompanymatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/getcompanymatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getcompanymatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getcompanymatch/hooks/angular-query.ts' },
  docs: {
    output: './src/getcompanymatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
