import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wiremock.org/admin/2.35.0/openapi.yaml',
  output: './src/wiremock-org-admin/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/wiremock-org-admin/types.ts' },
  client: { output: './src/wiremock-org-admin/client.ts', baseUrl: '/' },
  rpc: { output: './src/wiremock-org-admin/rpc.ts', parseResponse: true },
  swr: { output: './src/wiremock-org-admin/hooks/swr.ts' },
  'tanstack-query': { output: './src/wiremock-org-admin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wiremock-org-admin/hooks/preact-query.ts' },
  'solid-query': { output: './src/wiremock-org-admin/hooks/solid-query.ts' },
  'vue-query': { output: './src/wiremock-org-admin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wiremock-org-admin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wiremock-org-admin/hooks/angular-query.ts' },
  docs: {
    output: './src/wiremock-org-admin/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
