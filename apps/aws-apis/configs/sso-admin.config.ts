import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sso-admin/2020-07-20/openapi.yaml',
  output: './src/sso-admin/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sso-admin/types.ts' },
  client: { output: './src/sso-admin/client.ts', baseUrl: '/' },
  rpc: { output: './src/sso-admin/rpc.ts', parseResponse: true },
  swr: { output: './src/sso-admin/hooks/swr.ts' },
  'tanstack-query': { output: './src/sso-admin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sso-admin/hooks/preact-query.ts' },
  'solid-query': { output: './src/sso-admin/hooks/solid-query.ts' },
  'vue-query': { output: './src/sso-admin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sso-admin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sso-admin/hooks/angular-query.ts' },
  docs: {
    output: './src/sso-admin/api.md',
    curl: true,
    baseUrl: 'https://sso-admin.us-east-1.amazonaws.com',
  },
})
