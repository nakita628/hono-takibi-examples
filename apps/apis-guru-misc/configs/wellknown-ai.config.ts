import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wellknown.ai/1.0.0/openapi.yaml',
  output: './src/wellknown-ai/routes.ts',
  template: {},
  type: { output: './src/wellknown-ai/types.ts' },
  client: { output: './src/wellknown-ai/client.ts', baseUrl: '/' },
  rpc: { output: './src/wellknown-ai/rpc.ts', parseResponse: true },
  swr: { output: './src/wellknown-ai/hooks/swr.ts' },
  'tanstack-query': { output: './src/wellknown-ai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wellknown-ai/hooks/preact-query.ts' },
  'solid-query': { output: './src/wellknown-ai/hooks/solid-query.ts' },
  'vue-query': { output: './src/wellknown-ai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wellknown-ai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wellknown-ai/hooks/angular-query.ts' },
  docs: {
    output: './src/wellknown-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
