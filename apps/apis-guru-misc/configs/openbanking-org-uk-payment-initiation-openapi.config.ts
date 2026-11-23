import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/payment-initiation-openapi/3.1.7/openapi.yaml',
  output: './src/openbanking-org-uk-payment-initiation-openapi/routes.ts',
  template: {},
  type: { output: './src/openbanking-org-uk-payment-initiation-openapi/types.ts' },
  client: { output: './src/openbanking-org-uk-payment-initiation-openapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/openbanking-org-uk-payment-initiation-openapi/rpc.ts', parseResponse: true },
  swr: { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openbanking-org-uk-payment-initiation-openapi/hooks/angular-query.ts' },
  docs: {
    output: './src/openbanking-org-uk-payment-initiation-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
