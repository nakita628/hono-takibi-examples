import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/user_ldap/openapi.json',
  output: './src/user-ldap/routes.ts',
  docs: {
    output: './src/user-ldap/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
