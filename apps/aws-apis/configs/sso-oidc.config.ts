import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sso-oidc/2019-06-10/openapi.yaml',
  output: './src/sso-oidc/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sso-oidc/types.ts' },
  client: { output: './src/sso-oidc/client.ts', baseUrl: '/' },
  rpc: { output: './src/sso-oidc/rpc.ts', parseResponse: true },
  swr: { output: './src/sso-oidc/hooks/swr.ts' },
  'tanstack-query': { output: './src/sso-oidc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sso-oidc/hooks/preact-query.ts' },
  'solid-query': { output: './src/sso-oidc/hooks/solid-query.ts' },
  'vue-query': { output: './src/sso-oidc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sso-oidc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sso-oidc/hooks/angular-query.ts' },
  docs: {
    output: './src/sso-oidc/api.md',
    curl: true,
    baseUrl: 'https://sso-oidc.us-east-1.amazonaws.com',
  },
})
