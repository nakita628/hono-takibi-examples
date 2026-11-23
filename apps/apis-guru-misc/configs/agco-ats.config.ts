import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/agco-ats.com/v1/openapi.yaml',
  output: './src/agco-ats/routes.ts',
  template: {},
  type: { output: './src/agco-ats/types.ts' },
  client: { output: './src/agco-ats/client.ts', baseUrl: '/' },
  rpc: { output: './src/agco-ats/rpc.ts', parseResponse: true },
  swr: { output: './src/agco-ats/hooks/swr.ts' },
  'tanstack-query': { output: './src/agco-ats/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/agco-ats/hooks/preact-query.ts' },
  'solid-query': { output: './src/agco-ats/hooks/solid-query.ts' },
  'vue-query': { output: './src/agco-ats/hooks/vue-query.ts' },
  'svelte-query': { output: './src/agco-ats/hooks/svelte-query.ts' },
  'angular-query': { output: './src/agco-ats/hooks/angular-query.ts' },
  docs: {
    output: './src/agco-ats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
