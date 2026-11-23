import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/contactcenterinsights/v1/openapi.yaml',
  output: './src/contactcenterinsights/routes.ts',
  template: {},
  type: { output: './src/contactcenterinsights/types.ts' },
  client: { output: './src/contactcenterinsights/client.ts', baseUrl: '/' },
  rpc: { output: './src/contactcenterinsights/rpc.ts', parseResponse: true },
  swr: { output: './src/contactcenterinsights/hooks/swr.ts' },
  'tanstack-query': { output: './src/contactcenterinsights/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/contactcenterinsights/hooks/preact-query.ts' },
  'solid-query': { output: './src/contactcenterinsights/hooks/solid-query.ts' },
  'vue-query': { output: './src/contactcenterinsights/hooks/vue-query.ts' },
  'svelte-query': { output: './src/contactcenterinsights/hooks/svelte-query.ts' },
  'angular-query': { output: './src/contactcenterinsights/hooks/angular-query.ts' },
  docs: {
    output: './src/contactcenterinsights/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
