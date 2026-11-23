import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/doqs.dev/1.0/openapi.yaml',
  output: './src/doqs-dev/routes.ts',
  template: {},
  type: { output: './src/doqs-dev/types.ts' },
  client: { output: './src/doqs-dev/client.ts', baseUrl: '/' },
  rpc: { output: './src/doqs-dev/rpc.ts', parseResponse: true },
  swr: { output: './src/doqs-dev/hooks/swr.ts' },
  'tanstack-query': { output: './src/doqs-dev/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/doqs-dev/hooks/preact-query.ts' },
  'solid-query': { output: './src/doqs-dev/hooks/solid-query.ts' },
  'vue-query': { output: './src/doqs-dev/hooks/vue-query.ts' },
  'svelte-query': { output: './src/doqs-dev/hooks/svelte-query.ts' },
  'angular-query': { output: './src/doqs-dev/hooks/angular-query.ts' },
  docs: {
    output: './src/doqs-dev/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
