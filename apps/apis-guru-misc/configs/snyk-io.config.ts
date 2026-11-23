import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/snyk.io/1.0.0/openapi.yaml',
  output: './src/snyk-io/routes.ts',
  template: {},
  type: { output: './src/snyk-io/types.ts' },
  client: { output: './src/snyk-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/snyk-io/rpc.ts', parseResponse: true },
  swr: { output: './src/snyk-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/snyk-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/snyk-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/snyk-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/snyk-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/snyk-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/snyk-io/hooks/angular-query.ts' },
  docs: {
    output: './src/snyk-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
