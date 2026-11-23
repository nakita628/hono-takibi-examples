import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openindex.ai/1.0.0/openapi.yaml',
  output: './src/openindex-ai/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openindex-ai/types.ts' },
  client: { output: './src/openindex-ai/client.ts', baseUrl: '/' },
  rpc: { output: './src/openindex-ai/rpc.ts', parseResponse: true },
  swr: { output: './src/openindex-ai/hooks/swr.ts' },
  'tanstack-query': { output: './src/openindex-ai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openindex-ai/hooks/preact-query.ts' },
  'solid-query': { output: './src/openindex-ai/hooks/solid-query.ts' },
  'vue-query': { output: './src/openindex-ai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openindex-ai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openindex-ai/hooks/angular-query.ts' },
  docs: {
    output: './src/openindex-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
