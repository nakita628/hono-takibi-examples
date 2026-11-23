import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/billingbudgets/v1beta1/openapi.yaml',
  output: './src/billingbudgets/routes.ts',
  template: {},
  type: { output: './src/billingbudgets/types.ts' },
  client: { output: './src/billingbudgets/client.ts', baseUrl: '/' },
  rpc: { output: './src/billingbudgets/rpc.ts', parseResponse: true },
  swr: { output: './src/billingbudgets/hooks/swr.ts' },
  'tanstack-query': { output: './src/billingbudgets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/billingbudgets/hooks/preact-query.ts' },
  'solid-query': { output: './src/billingbudgets/hooks/solid-query.ts' },
  'vue-query': { output: './src/billingbudgets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/billingbudgets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/billingbudgets/hooks/angular-query.ts' },
  docs: {
    output: './src/billingbudgets/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
