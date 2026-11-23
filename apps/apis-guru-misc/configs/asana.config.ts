import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/asana.com/1.0/openapi.yaml',
  output: './src/asana/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/asana/types.ts' },
  client: { output: './src/asana/client.ts', baseUrl: '/' },
  rpc: { output: './src/asana/rpc.ts', parseResponse: true },
  swr: { output: './src/asana/hooks/swr.ts' },
  'tanstack-query': { output: './src/asana/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/asana/hooks/preact-query.ts' },
  'solid-query': { output: './src/asana/hooks/solid-query.ts' },
  'vue-query': { output: './src/asana/hooks/vue-query.ts' },
  'svelte-query': { output: './src/asana/hooks/svelte-query.ts' },
  'angular-query': { output: './src/asana/hooks/angular-query.ts' },
  docs: {
    output: './src/asana/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
