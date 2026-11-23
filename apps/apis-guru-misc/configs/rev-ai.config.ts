import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rev.ai/v1/openapi.yaml',
  output: './src/rev-ai/routes.ts',
  template: {},
  type: { output: './src/rev-ai/types.ts' },
  client: { output: './src/rev-ai/client.ts', baseUrl: '/' },
  rpc: { output: './src/rev-ai/rpc.ts', parseResponse: true },
  swr: { output: './src/rev-ai/hooks/swr.ts' },
  'tanstack-query': { output: './src/rev-ai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rev-ai/hooks/preact-query.ts' },
  'solid-query': { output: './src/rev-ai/hooks/solid-query.ts' },
  'vue-query': { output: './src/rev-ai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rev-ai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rev-ai/hooks/angular-query.ts' },
  docs: {
    output: './src/rev-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
