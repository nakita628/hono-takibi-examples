import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/maxlifeinsurance/3.0.0/openapi.yaml',
  output: './src/maxlifeinsurance/routes.ts',
  template: {},
  type: { output: './src/maxlifeinsurance/types.ts' },
  client: { output: './src/maxlifeinsurance/client.ts', baseUrl: '/' },
  rpc: { output: './src/maxlifeinsurance/rpc.ts', parseResponse: true },
  swr: { output: './src/maxlifeinsurance/hooks/swr.ts' },
  'tanstack-query': { output: './src/maxlifeinsurance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/maxlifeinsurance/hooks/preact-query.ts' },
  'solid-query': { output: './src/maxlifeinsurance/hooks/solid-query.ts' },
  'vue-query': { output: './src/maxlifeinsurance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/maxlifeinsurance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/maxlifeinsurance/hooks/angular-query.ts' },
  docs: {
    output: './src/maxlifeinsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
