import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/art19.com/1.0.0/openapi.yaml',
  output: './src/art19/routes.ts',
  template: {},
  type: { output: './src/art19/types.ts' },
  client: { output: './src/art19/client.ts', baseUrl: '/' },
  rpc: { output: './src/art19/rpc.ts', parseResponse: true },
  swr: { output: './src/art19/hooks/swr.ts' },
  'tanstack-query': { output: './src/art19/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/art19/hooks/preact-query.ts' },
  'solid-query': { output: './src/art19/hooks/solid-query.ts' },
  'vue-query': { output: './src/art19/hooks/vue-query.ts' },
  'svelte-query': { output: './src/art19/hooks/svelte-query.ts' },
  'angular-query': { output: './src/art19/hooks/angular-query.ts' },
  docs: {
    output: './src/art19/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
