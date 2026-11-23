import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/onsched.com/utility/v1/openapi.yaml',
  output: './src/onsched-utility/routes.ts',
  template: {},
  type: { output: './src/onsched-utility/types.ts' },
  client: { output: './src/onsched-utility/client.ts', baseUrl: '/' },
  rpc: { output: './src/onsched-utility/rpc.ts', parseResponse: true },
  swr: { output: './src/onsched-utility/hooks/swr.ts' },
  'tanstack-query': { output: './src/onsched-utility/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/onsched-utility/hooks/preact-query.ts' },
  'solid-query': { output: './src/onsched-utility/hooks/solid-query.ts' },
  'vue-query': { output: './src/onsched-utility/hooks/vue-query.ts' },
  'svelte-query': { output: './src/onsched-utility/hooks/svelte-query.ts' },
  'angular-query': { output: './src/onsched-utility/hooks/angular-query.ts' },
  docs: {
    output: './src/onsched-utility/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
