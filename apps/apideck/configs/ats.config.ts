import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/ats/9.3.0/openapi.yaml',
  output: './src/ats/routes.ts',
  template: {},
  type: { output: './src/ats/types.ts' },
  client: { output: './src/ats/client.ts', baseUrl: '/' },
  rpc: { output: './src/ats/rpc.ts', parseResponse: true },
  swr: { output: './src/ats/hooks/swr.ts' },
  'tanstack-query': { output: './src/ats/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ats/hooks/preact-query.ts' },
  'solid-query': { output: './src/ats/hooks/solid-query.ts' },
  'vue-query': { output: './src/ats/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ats/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ats/hooks/angular-query.ts' },
  docs: {
    output: './src/ats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
