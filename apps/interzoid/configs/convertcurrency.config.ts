import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/convertcurrency/1.0.0/openapi.yaml',
  output: './src/convertcurrency/routes.ts',
  template: {},
  type: { output: './src/convertcurrency/types.ts' },
  client: { output: './src/convertcurrency/client.ts', baseUrl: '/' },
  rpc: { output: './src/convertcurrency/rpc.ts', parseResponse: true },
  swr: { output: './src/convertcurrency/hooks/swr.ts' },
  'tanstack-query': { output: './src/convertcurrency/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/convertcurrency/hooks/preact-query.ts' },
  'solid-query': { output: './src/convertcurrency/hooks/solid-query.ts' },
  'vue-query': { output: './src/convertcurrency/hooks/vue-query.ts' },
  'svelte-query': { output: './src/convertcurrency/hooks/svelte-query.ts' },
  'angular-query': { output: './src/convertcurrency/hooks/angular-query.ts' },
  docs: {
    output: './src/convertcurrency/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
