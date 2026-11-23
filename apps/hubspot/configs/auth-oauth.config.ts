import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Auth/Oauth/Rollouts/279897/2026-09/oauth.json',
  output: './src/auth-oauth/routes.ts',
  template: {},
  type: { output: './src/auth-oauth/types.ts' },
  client: { output: './src/auth-oauth/client.ts', baseUrl: '/' },
  rpc: { output: './src/auth-oauth/rpc.ts', parseResponse: true },
  swr: { output: './src/auth-oauth/hooks/swr.ts' },
  'tanstack-query': { output: './src/auth-oauth/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/auth-oauth/hooks/preact-query.ts' },
  'solid-query': { output: './src/auth-oauth/hooks/solid-query.ts' },
  'vue-query': { output: './src/auth-oauth/hooks/vue-query.ts' },
  'svelte-query': { output: './src/auth-oauth/hooks/svelte-query.ts' },
  'angular-query': { output: './src/auth-oauth/hooks/angular-query.ts' },
  docs: {
    output: './src/auth-oauth/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
