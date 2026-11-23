import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/eos.local/1.0.0/openapi.yaml',
  output: './src/eos/routes.ts',
  template: {},
  type: { output: './src/eos/types.ts' },
  client: { output: './src/eos/client.ts', baseUrl: '/' },
  rpc: { output: './src/eos/rpc.ts', parseResponse: true },
  swr: { output: './src/eos/hooks/swr.ts' },
  'tanstack-query': { output: './src/eos/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/eos/hooks/preact-query.ts' },
  'solid-query': { output: './src/eos/hooks/solid-query.ts' },
  'vue-query': { output: './src/eos/hooks/vue-query.ts' },
  'svelte-query': { output: './src/eos/hooks/svelte-query.ts' },
  'angular-query': { output: './src/eos/hooks/angular-query.ts' },
  docs: {
    output: './src/eos/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
