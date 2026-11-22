import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/patientview.org/1.0/openapi.yaml',
  output: './src/patientview-org/routes.ts',
  template: {},
  type: { output: './src/patientview-org/types.ts' },
  client: { output: './src/patientview-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/patientview-org/rpc.ts', parseResponse: true },
  swr: { output: './src/patientview-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/patientview-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/patientview-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/patientview-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/patientview-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/patientview-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/patientview-org/hooks/angular-query.ts' },
  docs: {
    output: './src/patientview-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
