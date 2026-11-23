import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_reminders/openapi.json',
  output: './src/files-reminders/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/files-reminders/types.ts' },
  client: { output: './src/files-reminders/client.ts', baseUrl: '/' },
  rpc: { output: './src/files-reminders/rpc.ts', parseResponse: true },
  swr: { output: './src/files-reminders/hooks/swr.ts' },
  'tanstack-query': { output: './src/files-reminders/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files-reminders/hooks/preact-query.ts' },
  'solid-query': { output: './src/files-reminders/hooks/solid-query.ts' },
  'vue-query': { output: './src/files-reminders/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files-reminders/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files-reminders/hooks/angular-query.ts' },
  docs: {
    output: './src/files-reminders/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
