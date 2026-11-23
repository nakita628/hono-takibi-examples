import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tisane.ai/1.0.0/openapi.yaml',
  output: './src/tisane-ai/routes.ts',
  template: {},
  type: { output: './src/tisane-ai/types.ts' },
  client: { output: './src/tisane-ai/client.ts', baseUrl: '/' },
  rpc: { output: './src/tisane-ai/rpc.ts', parseResponse: true },
  swr: { output: './src/tisane-ai/hooks/swr.ts' },
  'tanstack-query': { output: './src/tisane-ai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tisane-ai/hooks/preact-query.ts' },
  'solid-query': { output: './src/tisane-ai/hooks/solid-query.ts' },
  'vue-query': { output: './src/tisane-ai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tisane-ai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tisane-ai/hooks/angular-query.ts' },
  docs: {
    output: './src/tisane-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
