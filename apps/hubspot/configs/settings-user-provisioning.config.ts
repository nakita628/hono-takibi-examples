import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/User%20Provisioning/Rollouts/325901/2026-09/userProvisioning.json',
  output: './src/settings-user-provisioning/routes.ts',
  template: {},
  type: { output: './src/settings-user-provisioning/types.ts' },
  client: { output: './src/settings-user-provisioning/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings-user-provisioning/rpc.ts', parseResponse: true },
  swr: { output: './src/settings-user-provisioning/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings-user-provisioning/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings-user-provisioning/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings-user-provisioning/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings-user-provisioning/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings-user-provisioning/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings-user-provisioning/hooks/angular-query.ts' },
  docs: {
    output: './src/settings-user-provisioning/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
