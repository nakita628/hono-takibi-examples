import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/easypdfserver.com/1/openapi.yaml',
  output: './src/easypdfserver/routes.ts',
  template: {},
  type: { output: './src/easypdfserver/types.ts' },
  client: { output: './src/easypdfserver/client.ts', baseUrl: '/' },
  rpc: { output: './src/easypdfserver/rpc.ts', parseResponse: true },
  swr: { output: './src/easypdfserver/hooks/swr.ts' },
  'tanstack-query': { output: './src/easypdfserver/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/easypdfserver/hooks/preact-query.ts' },
  'solid-query': { output: './src/easypdfserver/hooks/solid-query.ts' },
  'vue-query': { output: './src/easypdfserver/hooks/vue-query.ts' },
  'svelte-query': { output: './src/easypdfserver/hooks/svelte-query.ts' },
  'angular-query': { output: './src/easypdfserver/hooks/angular-query.ts' },
  docs: {
    output: './src/easypdfserver/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
