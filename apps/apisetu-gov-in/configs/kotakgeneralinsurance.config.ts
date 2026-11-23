import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kotakgeneralinsurance/3.0.0/openapi.yaml',
  output: './src/kotakgeneralinsurance/routes.ts',
  template: {},
  type: { output: './src/kotakgeneralinsurance/types.ts' },
  client: { output: './src/kotakgeneralinsurance/client.ts', baseUrl: '/' },
  rpc: { output: './src/kotakgeneralinsurance/rpc.ts', parseResponse: true },
  swr: { output: './src/kotakgeneralinsurance/hooks/swr.ts' },
  'tanstack-query': { output: './src/kotakgeneralinsurance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kotakgeneralinsurance/hooks/preact-query.ts' },
  'solid-query': { output: './src/kotakgeneralinsurance/hooks/solid-query.ts' },
  'vue-query': { output: './src/kotakgeneralinsurance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kotakgeneralinsurance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kotakgeneralinsurance/hooks/angular-query.ts' },
  docs: {
    output: './src/kotakgeneralinsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
