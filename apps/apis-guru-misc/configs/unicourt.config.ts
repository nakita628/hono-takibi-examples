import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/unicourt.com/1.0.0/openapi.yaml',
  output: './src/unicourt/routes.ts',
  template: {},
  type: { output: './src/unicourt/types.ts' },
  client: { output: './src/unicourt/client.ts', baseUrl: '/' },
  rpc: { output: './src/unicourt/rpc.ts', parseResponse: true },
  swr: { output: './src/unicourt/hooks/swr.ts' },
  'tanstack-query': { output: './src/unicourt/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/unicourt/hooks/preact-query.ts' },
  'solid-query': { output: './src/unicourt/hooks/solid-query.ts' },
  'vue-query': { output: './src/unicourt/hooks/vue-query.ts' },
  'svelte-query': { output: './src/unicourt/hooks/svelte-query.ts' },
  'angular-query': { output: './src/unicourt/hooks/angular-query.ts' },
  docs: {
    output: './src/unicourt/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
