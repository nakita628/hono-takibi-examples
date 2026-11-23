import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/lookupareacode/1.0.0/openapi.yaml',
  output: './src/lookupareacode/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lookupareacode/types.ts' },
  client: { output: './src/lookupareacode/client.ts', baseUrl: '/' },
  rpc: { output: './src/lookupareacode/rpc.ts', parseResponse: true },
  swr: { output: './src/lookupareacode/hooks/swr.ts' },
  'tanstack-query': { output: './src/lookupareacode/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lookupareacode/hooks/preact-query.ts' },
  'solid-query': { output: './src/lookupareacode/hooks/solid-query.ts' },
  'vue-query': { output: './src/lookupareacode/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lookupareacode/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lookupareacode/hooks/angular-query.ts' },
  docs: {
    output: './src/lookupareacode/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
