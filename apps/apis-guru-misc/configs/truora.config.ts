import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/truora.com/1.0.0/openapi.yaml',
  output: './src/truora/routes.ts',
  template: {},
  type: { output: './src/truora/types.ts' },
  client: { output: './src/truora/client.ts', baseUrl: '/' },
  rpc: { output: './src/truora/rpc.ts', parseResponse: true },
  swr: { output: './src/truora/hooks/swr.ts' },
  'tanstack-query': { output: './src/truora/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/truora/hooks/preact-query.ts' },
  'solid-query': { output: './src/truora/hooks/solid-query.ts' },
  'vue-query': { output: './src/truora/hooks/vue-query.ts' },
  'svelte-query': { output: './src/truora/hooks/svelte-query.ts' },
  'angular-query': { output: './src/truora/hooks/angular-query.ts' },
  docs: {
    output: './src/truora/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
