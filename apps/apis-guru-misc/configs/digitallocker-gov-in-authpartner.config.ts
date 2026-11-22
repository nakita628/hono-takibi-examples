import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/digitallocker.gov.in/authpartner/1.0.0/openapi.yaml',
  output: './src/digitallocker-gov-in-authpartner/routes.ts',
  template: {},
  type: { output: './src/digitallocker-gov-in-authpartner/types.ts' },
  client: { output: './src/digitallocker-gov-in-authpartner/client.ts', baseUrl: '/' },
  rpc: { output: './src/digitallocker-gov-in-authpartner/rpc.ts', parseResponse: true },
  swr: { output: './src/digitallocker-gov-in-authpartner/hooks/swr.ts' },
  'tanstack-query': { output: './src/digitallocker-gov-in-authpartner/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/digitallocker-gov-in-authpartner/hooks/preact-query.ts' },
  'solid-query': { output: './src/digitallocker-gov-in-authpartner/hooks/solid-query.ts' },
  'vue-query': { output: './src/digitallocker-gov-in-authpartner/hooks/vue-query.ts' },
  'svelte-query': { output: './src/digitallocker-gov-in-authpartner/hooks/svelte-query.ts' },
  'angular-query': { output: './src/digitallocker-gov-in-authpartner/hooks/angular-query.ts' },
  docs: {
    output: './src/digitallocker-gov-in-authpartner/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
