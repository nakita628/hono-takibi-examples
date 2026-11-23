import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/SoftPOSConfigurationService-v3.json',
  output: './src/SoftPOSConfigurationService-v3/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/SoftPOSConfigurationService-v3/types.ts' },
  client: { output: './src/SoftPOSConfigurationService-v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/SoftPOSConfigurationService-v3/rpc.ts', parseResponse: true },
  swr: { output: './src/SoftPOSConfigurationService-v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/SoftPOSConfigurationService-v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/SoftPOSConfigurationService-v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/SoftPOSConfigurationService-v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/SoftPOSConfigurationService-v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/SoftPOSConfigurationService-v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/SoftPOSConfigurationService-v3/hooks/angular-query.ts' },
  docs: {
    output: './src/SoftPOSConfigurationService-v3/api.md',
    curl: true,
    baseUrl: 'https://softposconfig-test.adyen.com/softposconfig/v3',
  },
})
