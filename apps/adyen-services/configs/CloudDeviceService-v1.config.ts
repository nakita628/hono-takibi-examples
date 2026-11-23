import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CloudDeviceService-v1.json',
  output: './src/CloudDeviceService-v1/routes.ts',
  template: {},
  type: { output: './src/CloudDeviceService-v1/types.ts' },
  client: { output: './src/CloudDeviceService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/CloudDeviceService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/CloudDeviceService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/CloudDeviceService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/CloudDeviceService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/CloudDeviceService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/CloudDeviceService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/CloudDeviceService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/CloudDeviceService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/CloudDeviceService-v1/api.md',
    curl: true,
    baseUrl: 'https://device-api-test.adyen.com/v1',
  },
})
