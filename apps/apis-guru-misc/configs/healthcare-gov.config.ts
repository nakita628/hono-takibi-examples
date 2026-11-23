import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/healthcare.gov/1.0.0/openapi.yaml',
  output: './src/healthcare-gov/routes.ts',
  template: {},
  type: { output: './src/healthcare-gov/types.ts' },
  client: { output: './src/healthcare-gov/client.ts', baseUrl: '/' },
  rpc: { output: './src/healthcare-gov/rpc.ts', parseResponse: true },
  swr: { output: './src/healthcare-gov/hooks/swr.ts' },
  'tanstack-query': { output: './src/healthcare-gov/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/healthcare-gov/hooks/preact-query.ts' },
  'solid-query': { output: './src/healthcare-gov/hooks/solid-query.ts' },
  'vue-query': { output: './src/healthcare-gov/hooks/vue-query.ts' },
  'svelte-query': { output: './src/healthcare-gov/hooks/svelte-query.ts' },
  'angular-query': { output: './src/healthcare-gov/hooks/angular-query.ts' },
  docs: {
    output: './src/healthcare-gov/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
