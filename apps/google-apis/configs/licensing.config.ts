import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/licensing/v1/openapi.yaml',
  output: './src/licensing/routes.ts',
  template: {},
  type: { output: './src/licensing/types.ts' },
  client: { output: './src/licensing/client.ts', baseUrl: '/' },
  rpc: { output: './src/licensing/rpc.ts', parseResponse: true },
  swr: { output: './src/licensing/hooks/swr.ts' },
  'tanstack-query': { output: './src/licensing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/licensing/hooks/preact-query.ts' },
  'solid-query': { output: './src/licensing/hooks/solid-query.ts' },
  'vue-query': { output: './src/licensing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/licensing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/licensing/hooks/angular-query.ts' },
  docs: {
    output: './src/licensing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
