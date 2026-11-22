import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Knock API, official OpenAPI spec:
  // https://github.com/knocklabs/docs/blob/fa596be423c8b0f855baab3a71bd91aa2f4d27fd/data/specs/api/openapi.yml
  input: 'https://raw.githubusercontent.com/knocklabs/docs/main/data/specs/api/openapi.yml',
  output: './src/api/routes.ts',
  template: {},
  type: { output: './src/api/types.ts' },
  client: { output: './src/api/client.ts', baseUrl: '/' },
  rpc: { output: './src/api/rpc.ts', parseResponse: true },
  swr: { output: './src/api/hooks/swr.ts' },
  'tanstack-query': { output: './src/api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/api/hooks/preact-query.ts' },
  'solid-query': { output: './src/api/hooks/solid-query.ts' },
  'vue-query': { output: './src/api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/api/hooks/angular-query.ts' },
  docs: {
    output: './src/api/api.md',
    curl: true,
    baseUrl: 'https://api.knock.app',
  },
})
