import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/javatpoint.com/v1/openapi.yaml',
  output: './src/javatpoint/routes.ts',
  template: {},
  type: { output: './src/javatpoint/types.ts' },
  client: { output: './src/javatpoint/client.ts', baseUrl: '/' },
  rpc: { output: './src/javatpoint/rpc.ts', parseResponse: true },
  swr: { output: './src/javatpoint/hooks/swr.ts' },
  'tanstack-query': { output: './src/javatpoint/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/javatpoint/hooks/preact-query.ts' },
  'solid-query': { output: './src/javatpoint/hooks/solid-query.ts' },
  'vue-query': { output: './src/javatpoint/hooks/vue-query.ts' },
  'svelte-query': { output: './src/javatpoint/hooks/svelte-query.ts' },
  'angular-query': { output: './src/javatpoint/hooks/angular-query.ts' },
  docs: {
    output: './src/javatpoint/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
