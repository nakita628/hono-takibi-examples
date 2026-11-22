import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/user_ldap/openapi.json',
  output: './src/user-ldap/routes.ts',
  template: {},
  type: { output: './src/user-ldap/types.ts' },
  client: { output: './src/user-ldap/client.ts', baseUrl: '/' },
  rpc: { output: './src/user-ldap/rpc.ts', parseResponse: true },
  swr: { output: './src/user-ldap/hooks/swr.ts' },
  'tanstack-query': { output: './src/user-ldap/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/user-ldap/hooks/preact-query.ts' },
  'solid-query': { output: './src/user-ldap/hooks/solid-query.ts' },
  'vue-query': { output: './src/user-ldap/hooks/vue-query.ts' },
  'svelte-query': { output: './src/user-ldap/hooks/svelte-query.ts' },
  'angular-query': { output: './src/user-ldap/hooks/angular-query.ts' },
  docs: {
    output: './src/user-ldap/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
