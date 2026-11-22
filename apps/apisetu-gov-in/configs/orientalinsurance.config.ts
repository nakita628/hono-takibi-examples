import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/orientalinsurance/3.0.0/openapi.yaml',
  output: './src/orientalinsurance/routes.ts',
  template: {},
  type: { output: './src/orientalinsurance/types.ts' },
  client: { output: './src/orientalinsurance/client.ts', baseUrl: '/' },
  rpc: { output: './src/orientalinsurance/rpc.ts', parseResponse: true },
  swr: { output: './src/orientalinsurance/hooks/swr.ts' },
  'tanstack-query': { output: './src/orientalinsurance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orientalinsurance/hooks/preact-query.ts' },
  'solid-query': { output: './src/orientalinsurance/hooks/solid-query.ts' },
  'vue-query': { output: './src/orientalinsurance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orientalinsurance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orientalinsurance/hooks/angular-query.ts' },
  docs: {
    output: './src/orientalinsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
