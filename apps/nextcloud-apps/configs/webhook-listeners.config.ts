import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/webhook_listeners/openapi.json',
  output: './src/webhook-listeners/routes.ts',
  template: {},
  type: { output: './src/webhook-listeners/types.ts' },
  client: { output: './src/webhook-listeners/client.ts', baseUrl: '/' },
  rpc: { output: './src/webhook-listeners/rpc.ts', parseResponse: true },
  swr: { output: './src/webhook-listeners/hooks/swr.ts' },
  'tanstack-query': { output: './src/webhook-listeners/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webhook-listeners/hooks/preact-query.ts' },
  'solid-query': { output: './src/webhook-listeners/hooks/solid-query.ts' },
  'vue-query': { output: './src/webhook-listeners/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webhook-listeners/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webhook-listeners/hooks/angular-query.ts' },
  docs: {
    output: './src/webhook-listeners/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
