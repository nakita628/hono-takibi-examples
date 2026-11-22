import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Knock Management API, official OpenAPI spec:
  // https://github.com/knocklabs/docs/blob/fa596be423c8b0f855baab3a71bd91aa2f4d27fd/data/specs/mapi/openapi.yml
  input:
    'https://raw.githubusercontent.com/knocklabs/docs/main/data/specs/mapi/openapi.yml',
  output: './src/mapi/routes.ts',
  template: {},
  type: { output: './src/mapi/types.ts' },
  client: { output: './src/mapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/mapi/rpc.ts', parseResponse: true },
  swr: { output: './src/mapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/mapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/mapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/mapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mapi/hooks/angular-query.ts' },
  docs: {
    output: './src/mapi/api.md',
    curl: true,
    baseUrl: 'https://control.knock.app',
  },
})
