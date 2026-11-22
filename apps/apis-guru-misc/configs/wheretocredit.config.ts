import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wheretocredit.com/1.0/openapi.yaml',
  output: './src/wheretocredit/routes.ts',
  template: {},
  type: { output: './src/wheretocredit/types.ts' },
  client: { output: './src/wheretocredit/client.ts', baseUrl: '/' },
  rpc: { output: './src/wheretocredit/rpc.ts', parseResponse: true },
  swr: { output: './src/wheretocredit/hooks/swr.ts' },
  'tanstack-query': { output: './src/wheretocredit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wheretocredit/hooks/preact-query.ts' },
  'solid-query': { output: './src/wheretocredit/hooks/solid-query.ts' },
  'vue-query': { output: './src/wheretocredit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wheretocredit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wheretocredit/hooks/angular-query.ts' },
  docs: {
    output: './src/wheretocredit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
