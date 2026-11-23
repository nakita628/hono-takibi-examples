import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/keycloak.local/1/openapi.yaml',
  output: './src/keycloak/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/keycloak/types.ts' },
  client: { output: './src/keycloak/client.ts', baseUrl: '/' },
  rpc: { output: './src/keycloak/rpc.ts', parseResponse: true },
  swr: { output: './src/keycloak/hooks/swr.ts' },
  'tanstack-query': { output: './src/keycloak/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/keycloak/hooks/preact-query.ts' },
  'solid-query': { output: './src/keycloak/hooks/solid-query.ts' },
  'vue-query': { output: './src/keycloak/hooks/vue-query.ts' },
  'svelte-query': { output: './src/keycloak/hooks/svelte-query.ts' },
  'angular-query': { output: './src/keycloak/hooks/angular-query.ts' },
  docs: {
    output: './src/keycloak/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
