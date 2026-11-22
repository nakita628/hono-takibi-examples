import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/figshare.com/2.0.0/openapi.yaml',
  output: './src/figshare/routes.ts',
  template: {},
  type: { output: './src/figshare/types.ts' },
  client: { output: './src/figshare/client.ts', baseUrl: '/' },
  rpc: { output: './src/figshare/rpc.ts', parseResponse: true },
  swr: { output: './src/figshare/hooks/swr.ts' },
  'tanstack-query': { output: './src/figshare/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/figshare/hooks/preact-query.ts' },
  'solid-query': { output: './src/figshare/hooks/solid-query.ts' },
  'vue-query': { output: './src/figshare/hooks/vue-query.ts' },
  'svelte-query': { output: './src/figshare/hooks/svelte-query.ts' },
  'angular-query': { output: './src/figshare/hooks/angular-query.ts' },
  docs: {
    output: './src/figshare/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
