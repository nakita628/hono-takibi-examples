import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/climatekuul.com/1.0/openapi.yaml',
  output: './src/climatekuul/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/climatekuul/types.ts' },
  client: { output: './src/climatekuul/client.ts', baseUrl: '/' },
  rpc: { output: './src/climatekuul/rpc.ts', parseResponse: true },
  swr: { output: './src/climatekuul/hooks/swr.ts' },
  'tanstack-query': { output: './src/climatekuul/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/climatekuul/hooks/preact-query.ts' },
  'solid-query': { output: './src/climatekuul/hooks/solid-query.ts' },
  'vue-query': { output: './src/climatekuul/hooks/vue-query.ts' },
  'svelte-query': { output: './src/climatekuul/hooks/svelte-query.ts' },
  'angular-query': { output: './src/climatekuul/hooks/angular-query.ts' },
  docs: {
    output: './src/climatekuul/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
