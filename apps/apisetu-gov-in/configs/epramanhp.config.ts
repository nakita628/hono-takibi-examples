import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/epramanhp/3.0.0/openapi.yaml',
  output: './src/epramanhp/routes.ts',
  template: {},
  type: { output: './src/epramanhp/types.ts' },
  client: { output: './src/epramanhp/client.ts', baseUrl: '/' },
  rpc: { output: './src/epramanhp/rpc.ts', parseResponse: true },
  swr: { output: './src/epramanhp/hooks/swr.ts' },
  'tanstack-query': { output: './src/epramanhp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/epramanhp/hooks/preact-query.ts' },
  'solid-query': { output: './src/epramanhp/hooks/solid-query.ts' },
  'vue-query': { output: './src/epramanhp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/epramanhp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/epramanhp/hooks/angular-query.ts' },
  docs: {
    output: './src/epramanhp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
