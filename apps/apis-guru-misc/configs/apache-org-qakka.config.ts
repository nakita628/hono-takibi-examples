import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apache.org/qakka/v1/openapi.yaml',
  output: './src/apache-org-qakka/routes.ts',
  template: {},
  type: { output: './src/apache-org-qakka/types.ts' },
  client: { output: './src/apache-org-qakka/client.ts', baseUrl: '/' },
  rpc: { output: './src/apache-org-qakka/rpc.ts', parseResponse: true },
  swr: { output: './src/apache-org-qakka/hooks/swr.ts' },
  'tanstack-query': { output: './src/apache-org-qakka/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apache-org-qakka/hooks/preact-query.ts' },
  'solid-query': { output: './src/apache-org-qakka/hooks/solid-query.ts' },
  'vue-query': { output: './src/apache-org-qakka/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apache-org-qakka/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apache-org-qakka/hooks/angular-query.ts' },
  docs: {
    output: './src/apache-org-qakka/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
