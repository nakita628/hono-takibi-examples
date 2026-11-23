import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/policyanalyzer/v1beta1/openapi.yaml',
  output: './src/policyanalyzer/routes.ts',
  template: {},
  type: { output: './src/policyanalyzer/types.ts' },
  client: { output: './src/policyanalyzer/client.ts', baseUrl: '/' },
  rpc: { output: './src/policyanalyzer/rpc.ts', parseResponse: true },
  swr: { output: './src/policyanalyzer/hooks/swr.ts' },
  'tanstack-query': { output: './src/policyanalyzer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/policyanalyzer/hooks/preact-query.ts' },
  'solid-query': { output: './src/policyanalyzer/hooks/solid-query.ts' },
  'vue-query': { output: './src/policyanalyzer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/policyanalyzer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/policyanalyzer/hooks/angular-query.ts' },
  docs: {
    output: './src/policyanalyzer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
