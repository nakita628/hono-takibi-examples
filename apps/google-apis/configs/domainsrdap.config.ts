import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/domainsrdap/v1/openapi.yaml',
  output: './src/domainsrdap/routes.ts',
  template: {},
  type: { output: './src/domainsrdap/types.ts' },
  client: { output: './src/domainsrdap/client.ts', baseUrl: '/' },
  rpc: { output: './src/domainsrdap/rpc.ts', parseResponse: true },
  swr: { output: './src/domainsrdap/hooks/swr.ts' },
  'tanstack-query': { output: './src/domainsrdap/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/domainsrdap/hooks/preact-query.ts' },
  'solid-query': { output: './src/domainsrdap/hooks/solid-query.ts' },
  'vue-query': { output: './src/domainsrdap/hooks/vue-query.ts' },
  'svelte-query': { output: './src/domainsrdap/hooks/svelte-query.ts' },
  'angular-query': { output: './src/domainsrdap/hooks/angular-query.ts' },
  docs: {
    output: './src/domainsrdap/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
