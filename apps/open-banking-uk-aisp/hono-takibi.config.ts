import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Account and Transaction API Specification, official OpenAPI spec:
  // https://github.com/OpenBankingUK/read-write-api-specs/blob/484a1795680d9852600247878b9fd2bfe584c0aa/dist/openapi/account-info-openapi.yaml
  input: 'https://raw.githubusercontent.com/OpenBankingUK/read-write-api-specs/master/dist/openapi/account-info-openapi.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:3000',
  },
})
