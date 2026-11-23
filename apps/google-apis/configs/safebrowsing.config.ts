import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/safebrowsing/v4/openapi.yaml',
  output: './src/safebrowsing/routes.ts',
  template: {},
  type: { output: './src/safebrowsing/types.ts' },
  client: { output: './src/safebrowsing/client.ts', baseUrl: '/' },
  rpc: { output: './src/safebrowsing/rpc.ts', parseResponse: true },
  swr: { output: './src/safebrowsing/hooks/swr.ts' },
  'tanstack-query': { output: './src/safebrowsing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/safebrowsing/hooks/preact-query.ts' },
  'solid-query': { output: './src/safebrowsing/hooks/solid-query.ts' },
  'vue-query': { output: './src/safebrowsing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/safebrowsing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/safebrowsing/hooks/angular-query.ts' },
  docs: {
    output: './src/safebrowsing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
