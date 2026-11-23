import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/LegalEntityService-v4.json',
  output: './src/LegalEntityService-v4/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/LegalEntityService-v4/types.ts' },
  client: { output: './src/LegalEntityService-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/LegalEntityService-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/LegalEntityService-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/LegalEntityService-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/LegalEntityService-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/LegalEntityService-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/LegalEntityService-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/LegalEntityService-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/LegalEntityService-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/LegalEntityService-v4/api.md',
    curl: true,
    baseUrl: 'https://kyc-test.adyen.com/lem/v4',
  },
})
