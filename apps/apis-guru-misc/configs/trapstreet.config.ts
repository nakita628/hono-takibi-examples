import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trapstreet.com/1.0.0/openapi.yaml',
  output: './src/trapstreet/routes.ts',
  template: {},
  type: { output: './src/trapstreet/types.ts' },
  client: { output: './src/trapstreet/client.ts', baseUrl: '/' },
  rpc: { output: './src/trapstreet/rpc.ts', parseResponse: true },
  swr: { output: './src/trapstreet/hooks/swr.ts' },
  'tanstack-query': { output: './src/trapstreet/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/trapstreet/hooks/preact-query.ts' },
  'solid-query': { output: './src/trapstreet/hooks/solid-query.ts' },
  'vue-query': { output: './src/trapstreet/hooks/vue-query.ts' },
  'svelte-query': { output: './src/trapstreet/hooks/svelte-query.ts' },
  'angular-query': { output: './src/trapstreet/hooks/angular-query.ts' },
  docs: {
    output: './src/trapstreet/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
