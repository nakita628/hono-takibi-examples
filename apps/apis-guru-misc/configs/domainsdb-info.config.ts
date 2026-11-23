import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/domainsdb.info/1.0/openapi.yaml',
  output: './src/domainsdb-info/routes.ts',
  template: {},
  type: { output: './src/domainsdb-info/types.ts' },
  client: { output: './src/domainsdb-info/client.ts', baseUrl: '/' },
  rpc: { output: './src/domainsdb-info/rpc.ts', parseResponse: true },
  swr: { output: './src/domainsdb-info/hooks/swr.ts' },
  'tanstack-query': { output: './src/domainsdb-info/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/domainsdb-info/hooks/preact-query.ts' },
  'solid-query': { output: './src/domainsdb-info/hooks/solid-query.ts' },
  'vue-query': { output: './src/domainsdb-info/hooks/vue-query.ts' },
  'svelte-query': { output: './src/domainsdb-info/hooks/svelte-query.ts' },
  'angular-query': { output: './src/domainsdb-info/hooks/angular-query.ts' },
  docs: {
    output: './src/domainsdb-info/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
