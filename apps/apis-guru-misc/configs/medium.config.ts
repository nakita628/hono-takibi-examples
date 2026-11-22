import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/medium.com/1.0/openapi.yaml',
  output: './src/medium/routes.ts',
  template: {},
  type: { output: './src/medium/types.ts' },
  client: { output: './src/medium/client.ts', baseUrl: '/' },
  rpc: { output: './src/medium/rpc.ts', parseResponse: true },
  swr: { output: './src/medium/hooks/swr.ts' },
  'tanstack-query': { output: './src/medium/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/medium/hooks/preact-query.ts' },
  'solid-query': { output: './src/medium/hooks/solid-query.ts' },
  'vue-query': { output: './src/medium/hooks/vue-query.ts' },
  'svelte-query': { output: './src/medium/hooks/svelte-query.ts' },
  'angular-query': { output: './src/medium/hooks/angular-query.ts' },
  docs: {
    output: './src/medium/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
