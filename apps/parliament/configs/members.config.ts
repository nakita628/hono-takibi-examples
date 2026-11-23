import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/members/v1/openapi.yaml',
  output: './src/members/routes.ts',
  template: {},
  type: { output: './src/members/types.ts' },
  client: { output: './src/members/client.ts', baseUrl: '/' },
  rpc: { output: './src/members/rpc.ts', parseResponse: true },
  swr: { output: './src/members/hooks/swr.ts' },
  'tanstack-query': { output: './src/members/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/members/hooks/preact-query.ts' },
  'solid-query': { output: './src/members/hooks/solid-query.ts' },
  'vue-query': { output: './src/members/hooks/vue-query.ts' },
  'svelte-query': { output: './src/members/hooks/svelte-query.ts' },
  'angular-query': { output: './src/members/hooks/angular-query.ts' },
  docs: {
    output: './src/members/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
