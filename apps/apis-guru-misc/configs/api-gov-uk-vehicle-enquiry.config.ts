import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api.gov.uk/vehicle-enquiry/1.1.0/openapi.yaml',
  output: './src/api-gov-uk-vehicle-enquiry/routes.ts',
  template: {},
  type: { output: './src/api-gov-uk-vehicle-enquiry/types.ts' },
  client: { output: './src/api-gov-uk-vehicle-enquiry/client.ts', baseUrl: '/' },
  rpc: { output: './src/api-gov-uk-vehicle-enquiry/rpc.ts', parseResponse: true },
  swr: { output: './src/api-gov-uk-vehicle-enquiry/hooks/swr.ts' },
  'tanstack-query': { output: './src/api-gov-uk-vehicle-enquiry/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/api-gov-uk-vehicle-enquiry/hooks/preact-query.ts' },
  'solid-query': { output: './src/api-gov-uk-vehicle-enquiry/hooks/solid-query.ts' },
  'vue-query': { output: './src/api-gov-uk-vehicle-enquiry/hooks/vue-query.ts' },
  'svelte-query': { output: './src/api-gov-uk-vehicle-enquiry/hooks/svelte-query.ts' },
  'angular-query': { output: './src/api-gov-uk-vehicle-enquiry/hooks/angular-query.ts' },
  docs: {
    output: './src/api-gov-uk-vehicle-enquiry/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
